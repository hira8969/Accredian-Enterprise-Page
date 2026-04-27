import { forwardRef, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface SectionWrapperProps extends HTMLAttributes<HTMLElement> {
  id?: string;
  containerClassName?: string;
}

const SectionWrapper = forwardRef<HTMLElement, SectionWrapperProps>(
  ({ className, containerClassName, id, children, ...props }, ref) => {
    return (
      <section
        ref={ref}
        id={id}
        className={cn("section-padding", className)}
        {...props}
      >
        <div className={cn("container-max", containerClassName)}>
          {children}
        </div>
      </section>
    );
  }
);
SectionWrapper.displayName = "SectionWrapper";

export { SectionWrapper };