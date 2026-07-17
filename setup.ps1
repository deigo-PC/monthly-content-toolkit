# Coordenadas Content System — Setup Script
# Run this once after cloning. After it completes, you can delete
# this repo — all skills are installed in OpenCode's directory.

$Script:ErrorActionPreference = "Stop"
$Green  = "Green"
$Cyan   = "Cyan"
$Yellow = "Yellow"
$Red    = "Red"

Write-Host "========================================" -ForegroundColor $Cyan
Write-Host "  Coordenadas Content System — Setup"        -ForegroundColor $Cyan
Write-Host "========================================" -ForegroundColor $Cyan
Write-Host ""

$openCodeDir    = "$env:USERPROFILE\.config\opencode\skills"
$globalSkills   = "$env:USERPROFILE\.agents\skills"
$repoSkillsDir  = Join-Path $PSScriptRoot ".agents\skills"

# ── Step 1: Install marketing skills ──
Write-Host "[1/4] Installing 46 marketing skills..." -ForegroundColor $Cyan
Write-Host "      (This may take a minute the first time)" -ForegroundColor $Yellow
Write-Host "      --global ensures a known destination, then we move to OpenCode." -ForegroundColor $Yellow

try {
    npx skills add coreyhaines31/marketingskills --global -y 2>&1 | Out-Null
    Write-Host "  ✔ Marketing skills installed" -ForegroundColor $Green
} catch {
    Write-Host "  ✘ Failed to install marketing skills" -ForegroundColor $Red
    Write-Host "    Make sure Node.js and npx are available (node --version / npx --version)" -ForegroundColor $Yellow
    Write-Host "    Then re-run: .\setup.ps1" -ForegroundColor $Yellow
    exit 1
}

# ── Step 2: Move all skills into OpenCode's directory ──
Write-Host "`n[2/4] Moving skills to OpenCode..." -ForegroundColor $Cyan

# 2a: Move globally-installed marketing skills to OpenCode
if (Test-Path $globalSkills) {
    Get-ChildItem -Path $globalSkills -Directory | ForEach-Object {
        $dst = Join-Path $openCodeDir $_.Name
        Copy-Item -Path $_.FullName -Destination $dst -Recurse -Force
    }
    Remove-Item -Path $globalSkills -Recurse -Force
    Write-Host "  ✔ Marketing skills moved to $openCodeDir" -ForegroundColor $Green
}

# 2b: Copy custom skills from repo to OpenCode
$customSkills = @(
    "content-plan-generator",
    "carousel-prompt-generator",
    "blog-post-generator",
    "infographic-brief-generator",
    "monthly-drop-landing-page"
)

$allFound = $true
foreach ($skill in $customSkills) {
    $src = Join-Path $repoSkillsDir $skill
    $dst = Join-Path $openCodeDir $skill
    if (Test-Path $src) {
        Copy-Item -Path $src -Destination $dst -Recurse -Force
    } else {
        Write-Host "  ✘ $skill — SKILL.md not found at $src" -ForegroundColor $Red
        $allFound = $false
    }
}

if (-not $allFound) {
    Write-Host "`nRepo appears incomplete. Try re-cloning." -ForegroundColor $Red
    exit 1
}

Write-Host "  ✔ Custom skills copied to OpenCode" -ForegroundColor $Green

# ── Step 3: Install template dependencies ──
Write-Host "`n[3/4] Installing template dependencies..." -ForegroundColor $Cyan

$templateDir = Join-Path $openCodeDir "monthly-drop-landing-page\template"
if (Test-Path $templateDir) {
    try {
        Push-Location $templateDir
        npm install 2>&1 | Out-Null
        Pop-Location
        Write-Host "  ✔ Template dependencies ready" -ForegroundColor $Green
    } catch {
        Write-Host "  ⚠ npm install failed — re-run manually:" -ForegroundColor $Yellow
        Write-Host "    Set-Location '$templateDir'; npm install" -ForegroundColor $Yellow
    }
} else {
    Write-Host "  ⚠ Template directory not found — npm install skipped" -ForegroundColor $Yellow
}

# ── Step 4: Summary ──
Write-Host "`n[4/4] Setup complete!" -ForegroundColor $Green
Write-Host ""
Write-Host "  Skills installed: 5 custom + 46 marketing" -ForegroundColor $Cyan
Write-Host "  Location: $openCodeDir" -ForegroundColor $Cyan
Write-Host ""
Write-Host "  ✓ All skills are installed in OpenCode." -ForegroundColor $Green
Write-Host "  ✓ You can delete this repo folder — it is no longer needed." -ForegroundColor $Green
Write-Host ""
Write-Host "  Next steps in OpenCode:" -ForegroundColor $Yellow
Write-Host "    1. Create a brand: 'Set up our new brand [Name]'"
Write-Host "    2. Generate content: 'Create the content plan for July'"
Write-Host ""
