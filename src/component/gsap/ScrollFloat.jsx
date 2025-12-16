import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollFloat = ({
  children,
  animationDuration = 1,
  ease = "back.inOut(2)",
  scrollStart = "center bottom+=50%",
  scrollEnd = "bottom bottom-=40%",
  stagger = 0.02
}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // ✅ Extract real text from DOM
    const text = el.innerText;

    // Clear and rebuild spans
    el.innerHTML = "";
    text.split("").forEach((char) => {
      const span = document.createElement("span");
      span.className = "inline-block will-change-transform";
      span.innerHTML = char === " " ? "&nbsp;" : char;
      el.appendChild(span);
    });

    const chars = el.querySelectorAll("span");

    gsap.fromTo(
      chars,
      {
        opacity: 0,
        yPercent: 120,
        scaleY: 2.3,
        scaleX: 0.7
      },
      {
        opacity: 1,
        yPercent: 0,
        scaleY: 1,
        scaleX: 1,
        duration: animationDuration,
        ease,
        stagger,
        scrollTrigger: {
          trigger: el,
          start: scrollStart,
          end: scrollEnd,
          scrub: true
        }
      }
    );
  }, [animationDuration, ease, scrollStart, scrollEnd, stagger]);

  return (
    <h2
      ref={containerRef}
      className="my-5 overflow-hidden text-center text-2xl lg:text-[4vw] leading-[1.3]"
    >
      {children}
    </h2>
  );
};

export default ScrollFloat;
