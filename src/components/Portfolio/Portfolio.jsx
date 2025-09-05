import React from "react";
import "./Portfolio.css";
const Portfolio = () => {
  return (
    <div className="portfolio">
      <div className="portfolio-title">
        <h1>My Projects</h1>
      </div>
      <div className="iframes">
        <div class="preview-wrap">
          <div class="preview-header">
            <div class="preview-bar">
              <span class="preview-dot"></span>
              <span class="preview-dot"></span>
              <span class="preview-dot"></span>
            </div>
            <span class="preview-url">https://ai-writemate.vercel.app</span>
          </div>

          <iframe
            class="preview-frame"
            src="https://ai-writemate.vercel.app"
            loading="lazy"
            referrerpolicy="no-referrer"
          ></iframe>
          <a
            class="preview-link"
            href="https://ai-writemate.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open
          </a>
        </div>
        <div class="preview-wrap">
          <div class="preview-header">
            <div class="preview-bar">
              <span class="preview-dot"></span>
              <span class="preview-dot"></span>
              <span class="preview-dot"></span>
            </div>
            <span class="preview-url">https://bitpip-v.vercel.app</span>
          </div>

          <iframe
            class="preview-frame"
            src="https://bitpip-v.vercel.app"
            loading="lazy"
            referrerpolicy="no-referrer"
          ></iframe>
          <a
            class="preview-link"
            href="https://bitpip-v.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open
          </a>
        </div>
        <div class="preview-wrap">
          <div class="preview-header">
            <div class="preview-bar">
              <span class="preview-dot"></span>
              <span class="preview-dot"></span>
              <span class="preview-dot"></span>
            </div>
            <span class="preview-url">https://tenonboost.online</span>
          </div>

          <iframe
            class="preview-frame"
            src="https://tenonboost.online"
            loading="lazy"
            referrerpolicy="no-referrer"
          ></iframe>
          <a
            class="preview-link"
            href="https://tenonboost.online"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open
          </a>
        </div>

        <div class="preview-wrap">
          <div class="preview-header">
            <div class="preview-bar">
              <span class="preview-dot"></span>
              <span class="preview-dot"></span>
              <span class="preview-dot"></span>
            </div>
            <span class="preview-url">https://glamoura-v3.vercel.app</span>
          </div>

          <iframe
            class="preview-frame"
            src="https://glamoura-v3.vercel.app"
            loading="lazy"
            referrerpolicy="no-referrer"
          ></iframe>
          <a
            class="preview-link"
            href="https://glamoura-v3.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open
          </a>
        </div>
        <div class="preview-wrap">
          <div class="preview-header">
            <div class="preview-bar">
              <span class="preview-dot"></span>
              <span class="preview-dot"></span>
              <span class="preview-dot"></span>
            </div>
            <span class="preview-url">
              https://browser-extensions-manager-weld.vercel.app/
            </span>
          </div>

          <iframe
            class="preview-frame"
            src="https://browser-extensions-manager-weld.vercel.app/"
            loading="lazy"
            referrerpolicy="no-referrer"
          ></iframe>
          <a
            class="preview-link"
            href="https://browser-extensions-manager-weld.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open
          </a>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
