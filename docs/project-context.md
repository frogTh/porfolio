# Portfolio Website - Project Context

## Project Information

| Field | Value |
|-------|-------|
| Project Name | Portfolio - Pham Huynh Quoc Thang |
| Project Type | Personal Portfolio Website |
| Tech Stack | React + Vite + TypeScript + TailwindCSS |
| Status | ✅ Complete |

## Quick Links

- **Dev Server**: http://localhost:5173
- **GitHub**: github.com/qthanggg
- **LinkedIn**: linkedin.com/in/thangpham2603

---

## 🤖 BMAD Agent Usage

Portfolio project được tạo trong BMAD-TEMPLATE, có thể sử dụng agents từ parent template.

### Available Agents (từ BMAD-TEMPLATE/src/modules/bmm/agents/)

| Agent | File | Purpose |
|-------|------|---------|
| **PM** | `pm.agent.yaml` | Project Manager - workflow-init, planning |
| **Analyst** | `analyst.agent.yaml` | Business Analyst - requirements |
| **Architect** | `architect.agent.yaml` | Technical architecture |
| **SM** | `sm.agent.yaml` | Scrum Master - sprint planning, stories |
| **Dev** | `dev.agent.yaml` | Developer - implementation |
| **TEA** | `tea.agent.yaml` | Test Architect - testing |
| **UX Designer** | `ux-designer.agent.yaml` | UX/UI design |
| **Tech Writer** | `tech-writer.agent.yaml` | Documentation |

### Cách Sử Dụng

1. **Load Agent**: Trong IDE (Cursor, VS Code), load agent file từ:
   ```
   BMAD-TEMPLATE/src/modules/bmm/agents/<agent>.agent.yaml
   ```

2. **Chạy Workflow**: Gọi các commands như:
   - `*workflow-init` - Khởi tạo workflow tracking
   - `*sprint-planning` - Tạo sprint-status.yaml
   - `*create-story` - Tạo story file chi tiết
   - `*workflow-status` - Kiểm tra trạng thái hiện tại

### Workflow Path Reference

```
src/modules/bmm/workflows/
├── 1-planning/              # Phase 1: Planning workflows
├── 2-requirements/          # Phase 2: Requirements
├── 3-solutioning/           # Phase 3: Architecture, UX
│   ├── create-epics-and-stories/
│   └── check-implementation-readiness/
├── 4-implementation/        # Phase 4: Development
│   ├── sprint-planning/
│   ├── create-story/
│   ├── dev-story/
│   └── code-review/
└── workflow-status/         # Status tracking
    └── init/                # workflow-init
```

---

## Project Structure

```
portfolio/
├── docs/
│   ├── PRD.md              # Product Requirements
│   ├── epics.md            # Epic & Story breakdown
│   ├── sprint-status.yaml  # Sprint tracking
│   ├── project-context.md  # This file
│   └── stories/            # Individual story files
├── src/
│   ├── components/         # React components
│   ├── data/               # Centralized data
│   ├── hooks/              # Custom hooks
│   └── utils/              # Utilities
└── [config files]
```

---

## Sprint Summary

| Epic | Status | Stories |
|------|--------|---------|
| Epic 1: Project Foundation | ✅ done | 3/3 complete |
| Epic 2: Core Components | ✅ done | 3/3 complete |
| Epic 3: Experience & Projects | ✅ done | 3/3 complete |
| Epic 4: Contact & Polish | ✅ done | 3/3 complete |

**Total: 12 stories completed**

---

## Commands

```bash
# Development
cd BMAD-TEMPLATE/portfolio
npm run dev

# Build
npm run build
```

---

## Notes

- Portfolio is a sub-project within BMAD-TEMPLATE
- Uses parent's BMAD modules at `src/modules/bmm/`
- BMAD docs stored in `portfolio/docs/` (not _bmad due to gitignore)
- TailwindCSS v4 requires @tailwindcss/postcss plugin
- Dark theme: primary #6366f1, secondary #06b6d4
