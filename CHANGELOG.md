# Changelog

## [1.1.0] - 2023-10-27

### ✨ Adicionado (Features)
- **Autenticação JWT:** Implementado fluxo completo de login (`AuthService`, `JwtStrategy`).
- **Guards:** Criado `JwtAuthGuard` para proteção de rotas privadas.
- **Frontend Auth:** Adicionado `middleware.ts` no Next.js para proteção de páginas e redirecionamento.
- **Relatórios:** Exportação de gráficos para PDF usando `html-to-image`.

### 🐛 Corrigido (Fixes)
- **Login Loop:** Corrigido problema de cookie sem `path: '/'` que causava redirecionamento infinito.
- **PDF Export:** Resolvido erro de cores modernas (`lab`/`oklch`) na exportação do PDF.

### ⚠️ Mudanças de Configuração
- **Backend:** Nova variável de ambiente obrigatória `JWT_SECRET`.
- **Frontend:** Nova lógica de cookies `wandersync_token`.
