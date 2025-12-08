// src/components/ui/checkbox.jsx
import React from 'react';

// This is a dummy Checkbox component to resolve compilation errors.
// It mimics the basic behavior of a checkbox for testing purposes.
const Checkbox = React.forwardRef(({ className, checked, onCheckedChange, ...props }, ref) => {
  return (
    <input
      type="checkbox"
      className={className}
      checked={checked}
      onChange={e => onCheckedChange && onCheckedChange(e.target.checked)}
      ref={ref}
      {...props}
    />
  );
});
Checkbox.displayName = 'Checkbox';

export { Checkbox };
