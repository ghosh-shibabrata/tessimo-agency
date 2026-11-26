"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import {
  Play,
  Pause,
  RotateCcw,
  Download,
  Share2,
  Copy,
  Check,
  Sparkles,
  ArrowLeft,
  Smartphone,
  Layers,
  Palette,
  Volume2,
  Video,
} from "lucide-react";

type ThemeMode = "cream" | "dark";

export default function ReelPage() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [theme, setTheme] = useState<ThemeMode>("cream");
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [recordProgress, setRecordProgress] = useState<number>(0);
  const [copiedCaption, setCopiedCaption] = useState<boolean>(false);

  const duration = 15.0; // 15 seconds Reel
  const animFrameRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);
  const pausedAtRef = useRef<number>(0);

  // Drawing function onto 1080x1920 canvas
  const drawFrame = useCallback(
    (t: number, targetTheme: ThemeMode = theme) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const w = canvas.width; // 1080
      const h = canvas.height; // 1920

      const isDark = targetTheme === "dark";
      const bg = isDark ? "#121214" : "#FAF9F5";
      const cardBg = isDark ? "#1C1C1F" : "#F3F1EB";
      const textPrimary = isDark ? "#F4F4F5" : "#191919";
      const textSecondary = isDark ? "#A1A1AA" : "#66635E";
      const border = isDark ? "rgba(255,255,255,0.12)" : "#E2DFD7";
      const teal = "#0D9488";
      const tealLight = "#2DD4BF";

      // 1. Clear background
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, w, h);

      // Subtle atmospheric radial glow
      const grad = ctx.createRadialGradient(w / 2, 400, 50, w / 2, 600, 700);
      grad.addColorStop(0, isDark ? "rgba(13, 148, 136, 0.25)" : "rgba(13, 148, 136, 0.12)");
      grad.addColorStop(1, "transparent");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);

      // Architectural Hairlines
      ctx.strokeStyle = border;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(80, 160);
      ctx.lineTo(w - 80, 160);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(80, h - 160);
      ctx.lineTo(w - 80, h - 160);
      ctx.stroke();

      // Top Brand Header
      ctx.font = "600 28px 'Geist Mono', monospace";
      ctx.fillStyle = textSecondary;
      ctx.textAlign = "left";
      ctx.fillText("TESSIMO TECHNOLOGY", 80, 125);

      ctx.textAlign = "right";
      ctx.fillStyle = teal;
      ctx.fillText("01 // EDITORIAL REEL", w - 80, 125);

      // Scene Logic
      // Scene 1: 0.0s - 3.8s (The Hook)
      // Scene 2: 3.8s - 7.5s (The Architecture & Brand)
      // Scene 3: 7.5s - 11.2s (The Proof & Pipeline)
      // Scene 4: 11.2s - 15.0s (The Call to Action)

      if (t < 3.8) {
        // SCENE 1: THE HOOK
        const p = Math.min(1, t / 0.8);
        const yOffset = (1 - p) * 40;

        // Tag
        ctx.fillStyle = cardBg;
        roundRect(ctx, 80, 360 + yOffset, 340, 56, 28);
        ctx.fill();
        ctx.strokeStyle = border;
        ctx.stroke();

        ctx.font = "600 22px 'Geist Mono', monospace";
        ctx.fillStyle = teal;
        ctx.textAlign = "center";
        ctx.fillText("THE 60-SECOND PROBLEM", 250, 396 + yOffset);

        // Big Headline (Newsreader Serif style)
        ctx.font = "400 92px 'Newsreader', Georgia, serif";
        ctx.fillStyle = textPrimary;
        ctx.textAlign = "left";

        ctx.fillText("Stop losing 68%", 80, 540 + yOffset);
        ctx.fillText("of your client", 80, 650 + yOffset);
        ctx.fillText("leads after 6 PM.", 80, 760 + yOffset);

        // Subtext
        ctx.font = "400 36px -apple-system, sans-serif";
        ctx.fillStyle = textSecondary;
        wrapText(
          ctx,
          "Most inquiries arrive when your office is closed. Traditional static contact forms kill conversion momentum.",
          80,
          870 + yOffset,
          w - 160,
          56
        );

        // Card illustration
        const cardY = 1100 + yOffset;
        ctx.fillStyle = cardBg;
        roundRect(ctx, 80, cardY, w - 160, 420, 36);
        ctx.fill();
        ctx.strokeStyle = border;
        ctx.stroke();

        // Warning stat
        ctx.font = "700 110px 'Newsreader', Georgia, serif";
        ctx.fillStyle = isDark ? "#F87171" : "#DC2626";
        ctx.fillText("68%", 140, cardY + 160);

        ctx.font = "600 32px -apple-system, sans-serif";
        ctx.fillStyle = textPrimary;
        ctx.fillText("Inbound Inquiries Abandoned", 140, cardY + 230);

        ctx.font = "400 28px -apple-system, sans-serif";
        ctx.fillStyle = textSecondary;
        ctx.fillText("Because response took > 1 hour or waited until morning.", 140, cardY + 290);
      } else if (t < 7.5) {
        // SCENE 2: THE SOLUTION
        const localT = t - 3.8;
        const p = Math.min(1, localT / 0.8);
        const yOffset = (1 - p) * 40;

        // Animated Tessimo T Logo
        drawTessimoLogo(ctx, w / 2, 420 + yOffset, 180, tealLight, teal);

        // Headline
        ctx.font = "400 84px 'Newsreader', Georgia, serif";
        ctx.fillStyle = textPrimary;
        ctx.textAlign = "center";
        ctx.fillText("Tessimo Technology", w / 2, 640 + yOffset);

        ctx.font = "italic 400 52px 'Newsreader', Georgia, serif";
        ctx.fillStyle = textSecondary;
        ctx.fillText("Digital Architecture & Autonomous Systems", w / 2, 720 + yOffset);

        // Feature Cards Stack
        const items = [
          { tag: "01", title: "Conversational & Visual Interfaces", desc: "Sub-second load times engineered with deep trust" },
          { tag: "02", title: "Autonomous WhatsApp & CRM Ingestion", desc: "Intelligent agents responding in under 60 seconds" },
          { tag: "03", title: "100% Intellectual Property Ownership", desc: "Zero vendor lock-in • Complete source code transfer" },
        ];

        items.forEach((item, i) => {
          const itemY = 820 + i * 220 + yOffset;
          ctx.fillStyle = cardBg;
          roundRect(ctx, 80, itemY, w - 160, 180, 28);
          ctx.fill();
          ctx.strokeStyle = border;
          ctx.stroke();

          ctx.font = "700 24px 'Geist Mono', monospace";
          ctx.fillStyle = teal;
          ctx.textAlign = "left";
          ctx.fillText(item.tag, 130, itemY + 65);

          ctx.font = "600 36px 'Newsreader', Georgia, serif";
          ctx.fillStyle = textPrimary;
          ctx.fillText(item.title, 180, itemY + 68);

          ctx.font = "400 26px -apple-system, sans-serif";
          ctx.fillStyle = textSecondary;
          ctx.fillText(item.desc, 130, itemY + 125);
        });
      } else if (t < 11.2) {
        // SCENE 3: THE PROOF & PIPELINE
        const localT = t - 7.5;
        const p = Math.min(1, localT / 0.8);
        const yOffset = (1 - p) * 40;

        // Tag
        ctx.fillStyle = cardBg;
        roundRect(ctx, 80, 320 + yOffset, 380, 56, 28);
        ctx.fill();
        ctx.strokeStyle = border;
        ctx.stroke();

        ctx.font = "600 22px 'Geist Mono', monospace";
        ctx.fillStyle = teal;
        ctx.textAlign = "center";
        ctx.fillText("AUTONOMOUS PIPELINE", 270, 356 + yOffset);

        ctx.font = "400 80px 'Newsreader', Georgia, serif";
        ctx.fillStyle = textPrimary;
        ctx.textAlign = "left";
        ctx.fillText("How your business", 80, 480 + yOffset);
        ctx.fillText("runs on autopilot.", 80, 570 + yOffset);

        // Simulation Box
        const boxY = 660 + yOffset;
        ctx.fillStyle = cardBg;
        roundRect(ctx, 80, boxY, w - 160, 840, 36);
        ctx.fill();
        ctx.strokeStyle = border;
        ctx.stroke();

        const stages = [
          { time: "00:00", label: "Client Inquires on Web / WhatsApp", state: "Captured" },
          { time: "00:15", label: "AI Qualifies Requirements & Budget", state: "0.4s Latency" },
          { time: "00:42", label: "Calendar Slot Booked Automatically", state: "Synced" },
          { time: "00:45", label: "CRM & Hubspot Updated with Zero Typing", state: "Completed" },
        ];

        stages.forEach((st, i) => {
          const sy = boxY + 60 + i * 190;

          // Inner card
          ctx.fillStyle = bg;
          roundRect(ctx, 120, sy, w - 240, 150, 24);
          ctx.fill();
          ctx.strokeStyle = border;
          ctx.stroke();

          // Green tick
          ctx.fillStyle = teal;
          ctx.beginPath();
          ctx.arc(170, sy + 75, 22, 0, Math.PI * 2);
          ctx.fill();

          ctx.font = "700 24px sans-serif";
          ctx.fillStyle = "#FAF9F5";
          ctx.textAlign = "center";
          ctx.fillText("✓", 170, sy + 83);

          ctx.textAlign = "left";
          ctx.font = "600 32px 'Newsreader', Georgia, serif";
          ctx.fillStyle = textPrimary;
          ctx.fillText(st.label, 220, sy + 65);

          ctx.font = "500 22px 'Geist Mono', monospace";
          ctx.fillStyle = textSecondary;
          ctx.fillText(`Elapsed: ${st.time}  •  Status: ${st.state}`, 220, sy + 110);
        });
      } else {
        // SCENE 4: CALL TO ACTION
        const localT = t - 11.2;
        const p = Math.min(1, localT / 0.8);
        const yOffset = (1 - p) * 40;

        drawTessimoLogo(ctx, w / 2, 480 + yOffset, 200, tealLight, teal);

        ctx.font = "400 96px 'Newsreader', Georgia, serif";
        ctx.fillStyle = textPrimary;
        ctx.textAlign = "center";
        ctx.fillText("Less manual.", w / 2, 760 + yOffset);

        ctx.font = "italic 400 96px 'Newsreader', Georgia, serif";
        ctx.fillStyle = teal;
        ctx.fillText("More momentum.", w / 2, 870 + yOffset);

        ctx.font = "400 38px -apple-system, sans-serif";
        ctx.fillStyle = textSecondary;
        ctx.fillText("Replace repetitive tasks with high-performance systems.", w / 2, 970 + yOffset);

        // CTA Button
        const btnY = 1100 + yOffset;
        ctx.fillStyle = isDark ? "#FAF9F5" : "#191919";
        roundRect(ctx, 160, btnY, w - 320, 120, 60);
        ctx.fill();

        ctx.font = "600 36px 'Geist Mono', monospace";
        ctx.fillStyle = isDark ? "#191919" : "#FAF9F5";
        ctx.fillText("START A PROJECT", w / 2, btnY + 74);

        // Website URL Box
        ctx.font = "500 34px 'Geist Mono', monospace";
        ctx.fillStyle = textPrimary;
        ctx.fillText("tessimotechnology.com", w / 2, 1310 + yOffset);

        ctx.font = "400 26px -apple-system, sans-serif";
        ctx.fillStyle = textSecondary;
        ctx.fillText("Remote Worldwide  •  15-Min Strategy Consultations", w / 2, 1370 + yOffset);
      }

      // Bottom Progress Bar
      const progress = t / duration;
      ctx.fillStyle = cardBg;
      ctx.fillRect(80, h - 80, w - 160, 8);

      ctx.fillStyle = teal;
      ctx.fillRect(80, h - 80, (w - 160) * progress, 8);

      // Time display
      ctx.font = "500 22px 'Geist Mono', monospace";
      ctx.fillStyle = textSecondary;
      ctx.textAlign = "right";
      ctx.fillText(`${t.toFixed(1)}s / ${duration.toFixed(1)}s`, w - 80, h - 100);
    },
    [theme]
  );

  // Animation Loop
  useEffect(() => {
    if (!isPlaying) {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      return;
    }

    const loop = (timestamp: number) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp - pausedAtRef.current * 1000;
      }
      const elapsed = (timestamp - startTimeRef.current) / 1000;
      const t = elapsed % duration;

      setCurrentTime(t);
      drawFrame(t);

      animFrameRef.current = requestAnimationFrame(loop);
    };

    animFrameRef.current = requestAnimationFrame(loop);

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [isPlaying, drawFrame]);

  const handleTogglePlay = () => {
    if (isPlaying) {
      pausedAtRef.current = currentTime;
      setIsPlaying(false);
    } else {
      startTimeRef.current = null;
      setIsPlaying(true);
    }
  };

  const handleReplay = () => {
    startTimeRef.current = null;
    pausedAtRef.current = 0;
    setCurrentTime(0);
    setIsPlaying(true);
  };

  // Video Export Recording using MediaRecorder
  const handleRecordVideo = async () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    setIsRecording(true);
    setIsPlaying(false);

    try {
      const stream = canvas.captureStream(60); // 60 FPS
      const mimeType = MediaRecorder.isTypeSupported("video/webm;codecs=vp9")
        ? "video/webm;codecs=vp9"
        : "video/webm";

      const recorder = new MediaRecorder(stream, {
        mimeType,
        videoBitsPerSecond: 8000000, // 8 Mbps high quality
      });

      const chunks: Blob[] = [];
      recorder.ondataavailable = (e) => {
        if (e.data.size > 0) chunks.push(e.data);
      };

      recorder.onstop = () => {
        const blob = new Blob(chunks, { type: "video/webm" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `tessimo-intro-reel-${theme}.webm`;
        a.click();
        URL.revokeObjectURL(url);
        setIsRecording(false);
        setIsPlaying(true);
      };

      recorder.start();

      // Render 15 seconds frame by frame at 60fps
      const totalFrames = 60 * duration;
      for (let f = 0; f <= totalFrames; f++) {
        const timeAtFrame = f / 60;
        drawFrame(timeAtFrame, theme);
        setRecordProgress(Math.round((f / totalFrames) * 100));
        await new Promise((r) => setTimeout(r, 1000 / 60));
      }

      recorder.stop();
    } catch (err) {
      console.error("Recording error:", err);
      setIsRecording(false);
      setIsPlaying(true);
    }
  };

  const reelCaption = `Stop losing 68% of your inbound clients after 6 PM ⏱️

Most business inquiries arrive outside traditional office hours. If your website only has a static contact form that sits until 10 AM tomorrow, the customer has already booked with someone else.

At @tessimotechnology, we build:
✦ High-converting digital interfaces engineered with sub-second speeds.
✦ 24/7 autonomous agents that qualify client requirements in under 60 seconds.
✦ Direct calendar locks & CRM auto-syncs without manual human typing.

Less manual. More momentum.

Commission your digital platform:
🔗 tessimotechnology.com

#WebDesign #BusinessAutomation #AIAutomation #Agency #Tech #Nextjs #Automation #Entrepreneurs #SaaS #DigitalAgency`;

  const copyCaption = () => {
    navigator.clipboard.writeText(reelCaption);
    setCopiedCaption(true);
    setTimeout(() => setCopiedCaption(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-[#191919] font-sans pt-6 pb-20">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Navigation Bar */}
        <div className="flex items-center justify-between border-b border-[#E2DFD7] pb-5">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#66635E] hover:text-[#191919] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to website</span>
          </Link>

          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-[#66635E] hidden sm:inline-block">
              1080 × 1920 • 9:16 INSTAGRAM REEL
            </span>
            <button
              onClick={() => setTheme(theme === "cream" ? "dark" : "cream")}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#E2DFD7] bg-[#F3F1EB] text-xs font-mono text-[#191919] hover:bg-[#EAE7DF] transition-colors"
            >
              <Palette className="w-3.5 h-3.5" />
              <span>Theme: {theme === "cream" ? "Warm Cream" : "Stealth Dark"}</span>
            </button>
          </div>
        </div>

        {/* Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F3F1EB] border border-[#E2DFD7] text-xs font-mono font-medium text-[#66635E]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0D9488]" />
            <span>Instagram Reel Studio</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#191919] leading-tight">
            Tessimo Technology Introduction Reel
          </h1>
          <p className="text-base text-[#66635E] max-w-2xl font-sans">
            A high-converting 15-second vertical video engineered for Instagram Reels, YouTube Shorts, and LinkedIn. Preview live or download the video directly.
          </p>
        </div>

        {/* Main Grid: Player on Left, Script & Assets on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Phone Mockup Frame with Live Canvas Player */}
          <div className="lg:col-span-5 flex flex-col items-center space-y-5">
            <div className="relative rounded-[48px] p-3.5 bg-[#191919] shadow-[0_24px_64px_rgba(0,0,0,0.18)] border-4 border-[#27272A] max-w-[340px] sm:max-w-[380px] w-full">
              {/* Phone Dynamic Island */}
              <div className="absolute top-6 left-1/2 -translate-x-1/2 w-28 h-5 bg-[#0A0A0A] rounded-full z-20 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-[#1A1A1A] mr-3" />
                <div className="w-2 h-2 rounded-full bg-[#0D9488]/70" />
              </div>

              {/* Aspect Ratio 9:16 Canvas Viewport */}
              <div className="relative rounded-[36px] overflow-hidden aspect-[9/16] w-full bg-[#FAF9F5]">
                <canvas
                  ref={canvasRef}
                  width={1080}
                  height={1920}
                  className="w-full h-full block"
                />

                {/* Recording Progress Overlay */}
                {isRecording && (
                  <div className="absolute inset-0 bg-black/85 backdrop-blur-sm z-30 flex flex-col items-center justify-center text-white p-6 text-center space-y-4">
                    <div className="w-12 h-12 rounded-full border-4 border-[#0D9488] border-t-transparent animate-spin" />
                    <p className="font-mono text-sm tracking-wide">
                      RENDERING 60 FPS VIDEO: {recordProgress}%
                    </p>
                    <p className="text-xs text-white/60">
                      Capturing all frames in ultra-sharp 1080×1920 resolution...
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Playback & Export Controls */}
            <div className="flex flex-wrap items-center justify-center gap-2.5 w-full max-w-[380px]">
              <button
                onClick={handleTogglePlay}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#191919] text-[#FAF9F5] text-xs font-mono font-medium hover:bg-[#191919]/90 transition-colors cursor-pointer"
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                <span>{isPlaying ? "Pause" : "Play"}</span>
              </button>

              <button
                onClick={handleReplay}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-[#E2DFD7] bg-[#F3F1EB] text-xs font-mono text-[#191919] hover:bg-[#EAE7DF] transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5 text-[#66635E]" />
                <span>Replay</span>
              </button>

              <button
                onClick={handleRecordVideo}
                disabled={isRecording}
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#0D9488] text-white text-xs font-mono font-semibold hover:bg-[#0F766E] transition-colors shadow-xs cursor-pointer disabled:opacity-50"
              >
                <Download className="w-3.5 h-3.5" />
                <span>{isRecording ? "Rendering..." : "Download Reel (.webm)"}</span>
              </button>
            </div>
          </div>

          {/* Right Column: Voiceover Script, Audio Suggestions & Instagram Caption */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Storyboard Card */}
            <div className="rounded-[28px] bg-[#FAF9F5] border border-[#E2DFD7] p-6 sm:p-8 space-y-5 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
              <div className="flex items-center justify-between border-b border-[#E2DFD7] pb-3">
                <div className="flex items-center gap-2">
                  <Video className="w-4 h-4 text-[#0D9488]" />
                  <span className="text-xs font-mono font-semibold text-[#191919] uppercase">
                    15-Second Storyboard & Voiceover
                  </span>
                </div>
                <span className="text-[11px] font-mono text-[#66635E]">4 STAGES • 60 FPS</span>
              </div>

              <div className="space-y-4 text-xs font-sans">
                {/* Scene 1 */}
                <div className="p-4 rounded-xl bg-[#F3F1EB] border border-[#E2DFD7] space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[#0D9488] font-semibold text-[11px]">SCENE 01 (0.0s – 3.8s) // THE HOOK</span>
                    <span className="text-[#66635E] font-mono text-[10px]">High Impact</span>
                  </div>
                  <p className="text-sm font-serif text-[#191919]">
                    &quot;Stop losing 68% of your client leads after 6 PM.&quot;
                  </p>
                  <p className="text-[#66635E] leading-relaxed">
                    <strong>Visual:</strong> Bold typography entrance on warm cream canvas highlighting the after-hours drop-off.
                  </p>
                </div>

                {/* Scene 2 */}
                <div className="p-4 rounded-xl bg-[#F3F1EB] border border-[#E2DFD7] space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[#0D9488] font-semibold text-[11px]">SCENE 02 (3.8s – 7.5s) // THE SOLUTION</span>
                    <span className="text-[#66635E] font-mono text-[10px]">Brand Reveal</span>
                  </div>
                  <p className="text-sm font-serif text-[#191919]">
                    &quot;Meet Tessimo Technology. Digital architecture engineered alongside 24/7 autonomous systems.&quot;
                  </p>
                  <p className="text-[#66635E] leading-relaxed">
                    <strong>Visual:</strong> Radiant Tessimo &quot;T&quot; emblem pulse reveal with sub-second speed tags.
                  </p>
                </div>

                {/* Scene 3 */}
                <div className="p-4 rounded-xl bg-[#F3F1EB] border border-[#E2DFD7] space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[#0D9488] font-semibold text-[11px]">SCENE 03 (7.5s – 11.2s) // THE PROOF</span>
                    <span className="text-[#66635E] font-mono text-[10px]">Live Flow</span>
                  </div>
                  <p className="text-sm font-serif text-[#191919]">
                    &quot;From website inquiry to confirmed calendar appointment in under 45 seconds—zero manual typing.&quot;
                  </p>
                  <p className="text-[#66635E] leading-relaxed">
                    <strong>Visual:</strong> 4-step pipeline ticking live: inquiry captured → AI qualified → calendar synced.
                  </p>
                </div>

                {/* Scene 4 */}
                <div className="p-4 rounded-xl bg-[#F3F1EB] border border-[#E2DFD7] space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[#0D9488] font-semibold text-[11px]">SCENE 04 (11.2s – 15.0s) // CALL TO ACTION</span>
                    <span className="text-[#66635E] font-mono text-[10px]">Conversion</span>
                  </div>
                  <p className="text-sm font-serif text-[#191919]">
                    &quot;Less manual. More momentum. Book your 15-minute consultation at tessimotechnology.com.&quot;
                  </p>
                  <p className="text-[#66635E] leading-relaxed">
                    <strong>Visual:</strong> Clean solid pill CTA button and direct domain address.
                  </p>
                </div>
              </div>
            </div>

            {/* Ready-to-Post Instagram Caption & Audio */}
            <div className="rounded-[28px] bg-[#FAF9F5] border border-[#E2DFD7] p-6 sm:p-8 space-y-4 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
              <div className="flex items-center justify-between border-b border-[#E2DFD7] pb-3">
                <span className="text-xs font-mono font-semibold text-[#191919] uppercase">
                  Instagram Caption & Hashtags
                </span>
                <button
                  onClick={copyCaption}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#191919] text-white text-xs font-mono hover:bg-[#191919]/90 transition-colors cursor-pointer"
                >
                  {copiedCaption ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedCaption ? "Copied!" : "Copy Caption"}</span>
                </button>
              </div>

              <pre className="p-4 rounded-xl bg-[#F3F1EB] border border-[#E2DFD7] font-mono text-xs text-[#191919] whitespace-pre-wrap leading-relaxed max-h-56 overflow-y-auto">
                {reelCaption}
              </pre>

              <div className="p-3.5 rounded-xl bg-[#F3F1EB] border border-[#E2DFD7] text-xs font-sans text-[#66635E] space-y-1">
                <p>
                  <strong>🎵 Recommended Instagram Audio:</strong> Lo-fi electronic beat, luxury cinematic ambient, or smooth tech house (e.g. <em>Interstellar Theme remix</em>, <em>Bicep - Glue</em>, or subtle Stripe Press ambient synth).
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

// Helpers
function roundRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number
) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

function wrapText(
  ctx: CanvasRenderingContext2D,
  text: string,
  x: number,
  y: number,
  maxWidth: number,
  lineHeight: number
) {
  const words = text.split(" ");
  let line = "";

  for (let n = 0; n < words.length; n++) {
    const testLine = line + words[n] + " ";
    const metrics = ctx.measureText(testLine);
    const testWidth = metrics.width;
    if (testWidth > maxWidth && n > 0) {
      ctx.fillText(line, x, y);
      line = words[n] + " ";
      y += lineHeight;
    } else {
      line = testLine;
    }
  }
  ctx.fillText(line, x, y);
}

function drawTessimoLogo(
  ctx: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  scale: number,
  color1: string,
  color2: string
) {
  ctx.save();
  ctx.translate(cx - scale / 2, cy - scale / 2);

  // Scaled 100x100 viewBox
  const factor = scale / 100;
  ctx.scale(factor, factor);

  const grad = ctx.createLinearGradient(15, 15, 85, 85);
  grad.addColorStop(0, color1);
  grad.addColorStop(1, color2);
  ctx.fillStyle = grad;

  const wing = new Path2D(
    "M 18 24 C 22 23 30 22 42 22 L 78 22 C 86 22 88 25 82 28 C 76 31 68 33 58 34 L 38 34 C 26 34 18 30 18 24 Z"
  );
  const stem = new Path2D(
    "M 44 32 C 55 32 72 31 78 35 C 72 40 60 44 48 44 C 44 44 42 47 42 52 L 42 78 C 42 84 46 86 52 83 L 52 86 C 45 88 38 88 34 83 C 32 80 32 72 32 64 L 32 46 C 32 37 37 32 44 32 Z"
  );

  ctx.fill(wing);
  ctx.fill(stem);

  ctx.restore();
}
