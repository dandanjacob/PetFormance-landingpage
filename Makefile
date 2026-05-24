PORT ?= 8080

.PHONY: serve open gif

serve:
	@echo "Servidor rodando em http://localhost:$(PORT)"
	@python3 -m http.server $(PORT)

open:
	@xdg-open http://localhost:$(PORT) 2>/dev/null || open http://localhost:$(PORT) 2>/dev/null || true

gif:
	ffmpeg -i "../Images/logo-video-4.mp4" \
		-vf "fps=15,scale=480:480:flags=lanczos,split[s0][s1];[s0]palettegen=max_colors=200[p];[s1][p]paletteuse=dither=bayer" \
		-loop 0 assets/logo-animation.gif -y
