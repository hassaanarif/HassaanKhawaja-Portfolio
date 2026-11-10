import { useEffect } from "react";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { injectStyle } from "react-toastify/dist/inject-style";
import Wrapper from "./components/Wrapper";
import Education from "./components/Education";

// React-Toastify-CSS
injectStyle();

export default function Layout() {
  useEffect(() => {
    const pointerQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!pointerQuery.matches || reducedMotionQuery.matches) {
      return;
    }

    let animationFrame = 0;
    let activeCard: HTMLElement | null = null;
    let nextCard: HTMLElement | null = null;
    let cardPointerX = 0;
    let cardPointerY = 0;

    const deactivateCard = (card: HTMLElement | null) => {
      card?.removeAttribute("data-pointer-active");
      card?.style.removeProperty("--card-pointer-x");
      card?.style.removeProperty("--card-pointer-y");
    };

    const updateCardHighlight = (event: PointerEvent) => {
      const target = event.target;
      const card = target instanceof Element ? target.closest<HTMLElement>(".surface-card") : null;

      if (activeCard !== card) {
        deactivateCard(activeCard);
        activeCard = card;
        activeCard?.setAttribute("data-pointer-active", "true");
      }

      nextCard = card;
      if (card) {
        const bounds = card.getBoundingClientRect();
        cardPointerX = event.clientX - bounds.left;
        cardPointerY = event.clientY - bounds.top;
      }

      if (animationFrame) {
        return;
      }

      animationFrame = window.requestAnimationFrame(() => {
        if (nextCard && activeCard === nextCard) {
          nextCard.style.setProperty("--card-pointer-x", `${cardPointerX}px`);
          nextCard.style.setProperty("--card-pointer-y", `${cardPointerY}px`);
        }
        animationFrame = 0;
      });
    };

    const clearActiveCard = () => {
      deactivateCard(activeCard);
      activeCard = null;
      nextCard = null;
    };

    const handlePointerLeave = (event: PointerEvent) => {
      if (!event.relatedTarget) {
        clearActiveCard();
      }
    };

    window.addEventListener("pointermove", updateCardHighlight, { passive: true });
    window.addEventListener("pointerout", handlePointerLeave);
    window.addEventListener("blur", clearActiveCard);

    return () => {
      window.removeEventListener("pointermove", updateCardHighlight);
      window.removeEventListener("pointerout", handlePointerLeave);
      window.removeEventListener("blur", clearActiveCard);
      window.cancelAnimationFrame(animationFrame);
      deactivateCard(activeCard);
    };
  }, []);

  return (
    <div className="portfolio-shell min-h-screen text-gray-200">
      <NavBar />
      <Wrapper>
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Certifications />
        <Contact />
        <Footer />
      </Wrapper>
    </div>
  );
}
