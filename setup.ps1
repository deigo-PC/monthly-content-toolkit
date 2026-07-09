# Monthly Content Toolkit — Setup Script
# Run this once after cloning the repo.

$Script:ErrorActionPreference = "Stop"
$Green  = "Green"
$Cyan   = "Cyan"
$Yellow = "Yellow"
$Red    = "Red"

Write-Host "========================================" -ForegroundColor $Cyan
Write-Host "  Monthly Content Toolkit — Setup"        -ForegroundColor $Cyan
Write-Host "========================================" -ForegroundColor $Cyan
Write-Host ""

# ── Step 1: Install marketing skills ──
Write-Host "[1/3] Installing marketing skills from coreyhaines31/marketingskills..." -ForegroundColor $Cyan
Write-Host "      (This may take a minute the first time)" -ForegroundColor $Yellow

try {
    npx skills add coreyhaines31/marketingskills --global -y 2>&1 | Out-Null
    Write-Host "  ✔ Marketing skills installed" -ForegroundColor $Green
} catch {
    Write-Host "  ✘ Failed to install marketing skills" -ForegroundColor $Red
    Write-Host "    Make sure Node.js and npx are available (node --version / npx --version)" -ForegroundColor $Yellow
    Write-Host "    Then re-run: .\setup.ps1" -ForegroundColor $Yellow
    exit 1
}

# ── Step 2: Verify custom skills ──
Write-Host "`n[2/3] Verifying custom skills..." -ForegroundColor $Cyan

$skillDir = Join-Path $PSScriptRoot ".agents\skills"
$expected = @(
    "content-plan-generator",
    "carousel-prompt-generator",
    "blog-post-generator",
    "infographic-brief-generator"
)
$allFound = $true

foreach ($skill in $expected) {
    $path = Join-Path $skillDir "$skill\SKILL.md"
    if (Test-Path $path) {
        Write-Host "  ✔ $skill" -ForegroundColor $Green
    } else {
        Write-Host "  ✘ $skill — SKILL.md not found at $path" -ForegroundColor $Red
        $allFound = $false
    }
}

if (-not $allFound) {
    Write-Host "`nSome skills are missing. Try re-cloning the repo." -ForegroundColor $Red
    exit 1
}

# ── Step 3: Summary ──
Write-Host "`n[3/3] Setup complete!" -ForegroundColor $Green
Write-Host ""
Write-Host "  Skills installed: 4 custom + 46 marketing" -ForegroundColor $Cyan
Write-Host "  Custom skills:" -ForegroundColor $Cyan
Write-Host "    • content-plan-generator     — Monthly content plan" -ForegroundColor $Cyan
Write-Host "    • carousel-prompt-generator  — Carousel image prompts" -ForegroundColor $Cyan
Write-Host "    • blog-post-generator       — SEO blog posts" -ForegroundColor $Cyan
Write-Host "    • infographic-brief-generator — Design briefs" -ForegroundColor $Cyan
Write-Host ""
Write-Host "  Next steps:" -ForegroundColor $Yellow
Write-Host "    1. Copy Brands\_template to create a new brand"
Write-Host "    2. Fill in the brand context (.agents/product-marketing.md)"
Write-Host "    3. Ask your AI coding agent:"
Write-Host "       'Generate the content plan for July'"
Write-Host ""

# Verify via npx skills list
try {
    $skillsList = npx skills list --global 2>&1
    $customFound = $true
    foreach ($skill in $expected) {
        if ($skillsList -notmatch $skill) {
            $customFound = $false
        }
    }
    if ($customFound) {
        Write-Host "  All 4 custom skills visible in global skills list." -ForegroundColor $Green
    } else {
        Write-Host "  Note: verifying skills in npx list — if you see 'skills' is not recognized, install the CLI:" -ForegroundColor $Yellow
        Write-Host "    npm install -g @anthropic-ai/skills" -ForegroundColor $Yellow
    }
} catch {
    # npx skills might not be globally installed; that's fine
}
