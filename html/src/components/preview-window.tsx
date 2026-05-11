"use client";

import { useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, RotateCcw, Globe, Lock } from "lucide-react";

interface PreviewWindowProps {
  code: string;
}

export function PreviewWindow({ code }: PreviewWindowProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Extract title from code
  const titleMatch = code.match(/<title>(.*?)<\/title>/i);
  const pageTitle = titleMatch ? titleMatch[1] : "Lesson Preview";

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const doc = iframe.contentDocument || iframe.contentWindow?.document;
    if (!doc) return;

    doc.open();
    // If the code is already a full document (starts with <!DOCTYPE), write it directly
    // Otherwise, wrap it in a basic light-themed structure
    if (code.trim().toLowerCase().startsWith("<!doctype")) {
      doc.write(code);
    } else {
      doc.write(`
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { 
                font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; 
                color: #1e293b; 
                padding: 24px;
                margin: 0;
                background: white;
              }
              * { box-sizing: border-box; }
              h1, h2, h3 { margin-top: 0; color: #0f172a; }
              p { line-height: 1.6; color: #475569; }
            </style>
          </head>
          <body>
            ${code}
          </body>
        </html>
      `);
    }
    doc.close();
  }, [code]);

  return (
    <div className="w-full h-full bg-white border border-slate-200 rounded-[1.5rem] overflow-hidden flex flex-col shadow-xl shadow-slate-200">
      {/* Browser Shell Header (Classic Light) */}
      <div className="bg-slate-50 border-b border-slate-200 flex flex-col">
        {/* Tab Bar */}
        <div className="flex items-center px-4 pt-2.5 gap-2">
          <div className="flex gap-1.5 mr-4">
            <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
            <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
            <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
          </div>
          
          <div className="bg-white px-4 py-1.5 rounded-t-lg border-x border-t border-slate-200 flex items-center gap-2 min-w-[140px]">
            <Globe size={11} className="text-blue-500" />
            <span className="text-[10px] font-bold text-slate-700 truncate max-w-[100px]">
              {pageTitle}
            </span>
          </div>
          <div className="w-5 h-5 rounded-full hover:bg-slate-200 flex items-center justify-center text-slate-400">
            <span className="text-lg font-light leading-none">+</span>
          </div>
        </div>

        {/* Control Bar */}
        <div className="p-2.5 flex items-center gap-4 bg-white border-t border-slate-200">
          <div className="flex items-center gap-3 text-slate-300">
            <ChevronLeft size={16} />
            <ChevronRight size={16} />
            <RotateCcw size={14} className="ml-1" />
          </div>

          <div className="flex-1 bg-slate-50 border border-slate-200 rounded-md py-1.5 px-4 flex items-center gap-2">
            <Lock size={10} className="text-slate-400" />
            <span className="text-[10px] font-mono text-slate-400">
              localhost:3000/preview.html
            </span>
          </div>
        </div>
      </div>

      {/* Viewport */}
      <div className="flex-1 bg-white relative overflow-hidden">
        <iframe
          ref={iframeRef}
          className="w-full h-full border-none pointer-events-auto"
          title="preview"
        />
      </div>
    </div>
  );
}
