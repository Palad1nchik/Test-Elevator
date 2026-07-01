package lead

import (
	"bytes"
	"log"
	"net/http"
	"net/http/httptest"
	"strings"
	"testing"
)

func newTestHandler() *Handler {
	return NewHandler(NewMemoryStore(), log.New(bytes.NewBuffer(nil), "", 0))
}

func TestCreateLead_OK(t *testing.T) {
	h := newTestHandler()
	body := `{"name":"Иван","phone":"+7 700 000 00 00","object_type":"ЖК","message":"4 лифта"}`
	req := httptest.NewRequest(http.MethodPost, "/api/leads", strings.NewReader(body))
	rec := httptest.NewRecorder()

	h.Create(rec, req)

	if rec.Code != http.StatusCreated {
		t.Fatalf("expected 201, got %d: %s", rec.Code, rec.Body.String())
	}
}

func TestCreateLead_ValidationError(t *testing.T) {
	h := newTestHandler()
	body := `{"name":"","phone":""}`
	req := httptest.NewRequest(http.MethodPost, "/api/leads", strings.NewReader(body))
	rec := httptest.NewRecorder()

	h.Create(rec, req)

	if rec.Code != http.StatusUnprocessableEntity {
		t.Fatalf("expected 422, got %d", rec.Code)
	}
}
