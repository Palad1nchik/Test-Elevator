package lead

import (
	"encoding/json"
	"log"
	"net/http"

	"github.com/kasper-elevator/backend/internal/httpx"
)

// Handler exposes HTTP endpoints for leads.
type Handler struct {
	store  Store
	logger *log.Logger
}

func NewHandler(store Store, logger *log.Logger) *Handler {
	return &Handler{store: store, logger: logger}
}

// Create handles POST /api/leads.
func (h *Handler) Create(w http.ResponseWriter, r *http.Request) {
	var in Input
	dec := json.NewDecoder(http.MaxBytesReader(w, r.Body, 1<<20)) // cap body at 1MB
	dec.DisallowUnknownFields()
	if err := dec.Decode(&in); err != nil {
		httpx.Error(w, http.StatusBadRequest, "некорректный запрос")
		return
	}

	if err := in.Validate(); err != nil {
		httpx.Error(w, http.StatusUnprocessableEntity, err.Error())
		return
	}

	created, err := h.store.Create(r.Context(), in)
	if err != nil {
		h.logger.Printf("create lead: %v", err)
		httpx.Error(w, http.StatusInternalServerError, "не удалось сохранить заявку")
		return
	}

	h.logger.Printf("new lead id=%s phone=%s type=%q", created.ID, created.Phone, created.ObjectType)
	httpx.JSON(w, http.StatusCreated, created)
}

// List handles GET /api/leads (intended for an internal/admin view; protect
// behind auth before exposing publicly).
func (h *Handler) List(w http.ResponseWriter, r *http.Request) {
	leads, err := h.store.List(r.Context())
	if err != nil {
		httpx.Error(w, http.StatusInternalServerError, "не удалось получить список")
		return
	}
	httpx.JSON(w, http.StatusOK, map[string]any{"items": leads, "count": len(leads)})
}
