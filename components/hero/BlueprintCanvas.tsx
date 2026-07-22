"use client";

import React, { useEffect, useRef } from "react";

export const BlueprintCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Mouse tracking for reactive lighting
    let mouse = { x: width / 2, y: height / 2, active: false };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // System Nodes for Network Connections
    const nodeCount = Math.min(Math.floor(width / 35), 35);
    const nodes: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      label: string;
    }[] = [];

    const architectureLabels = [
      "API Gateway",
      "Auth Service",
      "Event Bus",
      "PostgreSQL",
      "Redis Cache",
      "K8s Ingress",
      "Vector Index",
      "gRPC Service",
      "Envoy Proxy",
      "GraphQL API",
    ];

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2 + 1.5,
        label: architectureLabels[i % architectureLabels.length],
      });
    }

    // Grid lines animation offset
    let gridOffset = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw Architectural Blueprint Grid Lines
      ctx.strokeStyle = "rgba(142, 155, 174, 0.04)";
      ctx.lineWidth = 1;

      const gridSize = 40;
      gridOffset = (gridOffset + 0.1) % gridSize;

      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Draw Cursor Radial Lighting Glow
      if (mouse.active) {
        const gradient = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          300
        );
        gradient.addColorStop(0, "rgba(224, 109, 83, 0.12)");
        gradient.addColorStop(0.5, "rgba(245, 158, 11, 0.03)");
        gradient.addColorStop(1, "rgba(11, 13, 16, 0)");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 300, 0, Math.PI * 2);
        ctx.fill();
      }

      // Draw Inter-node Network Connections & Data Packets
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        // Move nodes
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        // Draw connections to nearby nodes
        for (let j = i + 1; j < nodes.length; j++) {
          const other = nodes[j];
          const dx = other.x - node.x;
          const dy = other.y - node.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 180) {
            const alpha = (1 - dist / 180) * 0.25;
            ctx.strokeStyle = `rgba(224, 109, 83, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            ctx.stroke();
          }
        }

        // Draw node point
        ctx.fillStyle = "#E06D53";
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fill();

        // Mouse distance pull
        if (mouse.active) {
          const mdx = mouse.x - node.x;
          const mdy = mouse.y - node.y;
          const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
          if (mdist < 140) {
            ctx.fillStyle = "rgba(245, 158, 11, 0.7)";
            ctx.font = "9px monospace";
            ctx.fillText(node.label, node.x + 8, node.y + 3);
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0"
    />
  );
};
