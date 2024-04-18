import React from 'react';

const PreventFocusEscapeModal = (
  event: React.KeyboardEvent<HTMLElement>,
  firstFocusableElement: React.RefObject<HTMLElement>,
  lastFocusableElement: React.RefObject<HTMLElement>
): void => {
  const isFirstElementFocused = event.target === firstFocusableElement.current;
  const isLastElementFocused = event.target === lastFocusableElement.current;

  if (event.key === 'Tab') {
    if (event.shiftKey && isFirstElementFocused) {
      event.preventDefault();
      lastFocusableElement.current?.focus();
    } else if (!event.shiftKey && isLastElementFocused) {
      event.preventDefault();
      firstFocusableElement.current?.focus();
    }
  }
};

export default PreventFocusEscapeModal;
