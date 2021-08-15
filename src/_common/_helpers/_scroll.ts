export const scrollToElement = (elementId: any) => {
    const el: any = document.getElementById(elementId);
    if (el) {
        el.scrollIntoView({ block: 'start', behavior: 'smooth' });
    } else {
        console.warn(`Scroll target element is not found: ${elementId}`);
    }
};

export const scrollToTop = (_rootElementId: any = 'root') => {
    scrollToElement(_rootElementId);
};
