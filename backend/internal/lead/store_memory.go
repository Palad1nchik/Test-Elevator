package lead

import (
	"context"
	"strconv"
	"sync"
	"time"
)

// MemoryStore is a thread-safe in-memory Store. Suitable for development and a
// starting point; data is lost on restart. Replace with a DB-backed Store for
// production persistence.
type MemoryStore struct {
	mu     sync.RWMutex
	seq    int64
	leads  []Lead
}

func NewMemoryStore() *MemoryStore {
	return &MemoryStore{}
}

func (s *MemoryStore) Create(_ context.Context, in Input) (Lead, error) {
	s.mu.Lock()
	defer s.mu.Unlock()

	s.seq++
	l := Lead{
		ID:         strconv.FormatInt(s.seq, 10),
		Name:       in.Name,
		Phone:      in.Phone,
		ObjectType: in.ObjectType,
		Message:    in.Message,
		CreatedAt:  time.Now().UTC(),
	}
	s.leads = append(s.leads, l)
	return l, nil
}

func (s *MemoryStore) List(_ context.Context) ([]Lead, error) {
	s.mu.RLock()
	defer s.mu.RUnlock()

	out := make([]Lead, len(s.leads))
	copy(out, s.leads)
	return out, nil
}
