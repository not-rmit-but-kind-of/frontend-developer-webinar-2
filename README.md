# DEV102 Expert Webinar 02 Advanced HTML Techniques

## Introductions - David and Ben
## House keeping 
  - Please mute your microphone unless talking.
  - Ask questions whenever, via zoom messaging or voice. Will do a Q&A at the end as well and then obviously you can ask questions on slack.
## Disclaimer ;)  
  
## Agenda 
1. Accessibility 
    - Accessible means that a web site's content is available, and its functionality can be operated, by anyone.
    
    - Types of impairments
      - Visual impairments, no vision and low-vision users (screen readers, braille)
      - Motor impairments
      - Hearing impairments
      - Cognitive impairments (ADHD, Dyslexia, and Autism). Make concentrating easier.
      - Temporary / permanent 

    - Resources 
      - https://www.w3.org/TR/WCAG20/ (Web Content Accessibility Guidelines)
      - https://ethanmarcotte.com/wrote/the-web-we-broke/
      - https://www.w3.org/TR/WCAG20/
      - https://www.w3.org/TR/wai-aria-1.1/
      - https://developer.mozilla.org/en-US/docs/Web/Accessibility  
      - https://webaim.org/standards/wcag/checklist    

    - Tip
      - Learn it now when you are learning the fundamentals and do it right from the start. 
  
    - Basic things you should always do:    
      - Alt tags for images
      - `<label>` should accompany any field - `<input>`, `<textarea>` and `<select>`. Use the `for` attribute in the `<label>`. 
      - Use appropriate html element with built in accessibility (e.g. `<button>` - they can be tabbed between, and activated using Return/Enter.)      
      - `≤html>` lang="en"
      - Logical tab order / avoid tabindex unless absolutely neccessary
      - Highlight focusable elements with focus - don't override the blue ring so it doesn't appear. 
      - Design
        - Avoid low contrast
        - Layout - closely locate labels with fields
        - Reduce movement on a large scale
        - Clear language
        - Button and link text labels are understandable and distinctive

2. Building responsive layouts 
    - Resources
      - https://developers.google.com/web/fundamentals/design-and-ux/responsive/
      - https://developers.google.com/web/fundamentals/design-and-ux/responsive/patterns
      - https://developers.google.com/web/fundamentals/design-and-ux/responsive/images
      - https://css-tricks.com/snippets/css/retina-display-media-query/
  
    - Mobile first approach   
      - Choose breakpoints that make sense for your content (reliance on design skills here), however as a guide (from good old Bootstrap): 
    
        ```css
        /* Custom, iPhone Retina */ 
        @media only screen and (min-width : 320px) {

        }

        /* Extra Small Devices, Phones */ 
        @media only screen and (min-width : 480px) {

        }

        /* Small Devices, Tablets */
        @media only screen and (min-width : 768px) {

        }

        /* Medium Devices, Desktops */
        @media only screen and (min-width : 992px) {

        }

        /* Large Devices, Wide Screens */
        @media only screen and (min-width : 1200px) {

        }
        ```

    - How to achieve a responsive website
    
      - Flexbox
        - https://css-tricks.com/snippets/css/a-guide-to-flexbox/
        - Achieve a fluid layout
    
      - Media queries
        - *device-width and device-height are deprecated, ignore this in articles*
        - min-width: Rules applied for any browser width greater than the value defined in the query.
        - max-width: Rules applied for any browser width less than the value defined in the query.
        - Also min-height and max-height
        - Can be combined e.g. @media (min-width: 500px) and (max-width: 600px) 
        - min-resolution / -webkit-min-device-pixel-ratio for high resolution devices (e.g. retina display)

      - CSS Grid
        - https://css-tricks.com/snippets/css/complete-guide-grid/

      - Raster images (jpeg, png, webp) vs vector images (SVG) for scaling

      - background-image: media-queries or image-set() (Chrome and Safari only) - browser chooses the most suitable image to render
      - `<img>` - srcset

    - Browser testing tools
      - Firefox / Chrome responsive layouts
      - Debug directly on your mobile to get a real feel for touch based interaction

3. Re-usable components
    - Polymer -> lit-html (https://lit-html.polymer-project.org/)
    - Web Components (https://developer.mozilla.org/en-US/docs/Web/Web_Components)
      - see example on branch feature/web-components