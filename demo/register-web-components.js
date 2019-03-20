const template = document.createElement('template')
template.innerHTML = `
  <style>

  *, :after, :before {
    box-sizing: border-box;
  }

  img {
    max-width: 100%;
    height: auto;
    vertical-align: top;
  }
  
  /* Destination Card */
  
  .destination-card {
    border: 1px #CCC solid;
    border-radius: 5px;
    background-color: #fff;
    transition: 0.4s;
  }
  
  .destination-card:hover {
    transform: scale(1.05);
  }
  
  .destination-card-content {
    padding: 1.25rem;
  }
  
  .destination-card-heading {
    margin: 0;
    line-height: 1;
  }
  
  .destination-card-summary {
    font-size: 1rem;
  }
</style>
        
<article class="destination-card">
  <img class="destination-card-image">
  <div class="destination-card-content">
    <h2 id="destination-card-title" class="destination-card-heading"></h2>
    <p class="destination-card-summary">      
    </p>
  </div>
</article>`

class DestinationCard extends HTMLElement {
  constructor () {
    super()
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true))    
  }

  connectedCallback() {       
    let img = this.shadowRoot.querySelector('img')
    img.src = this.getAttribute('img')
    
    // Extract the 'title' from the attribute passed in e.g. Pisa, Italy
    const titleText = this.getAttribute('title')
    let cardTitle = this.shadowRoot.querySelector('#destination-card-title')
    cardTitle.textContent = titleText
    img.setAttribute('alt', `Photo of ${titleText}`)

    // Extract the 'text' from the attribute passed in e.g. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor....
    const descriptionText = this.getAttribute('text')  
    let cardDescriptionElement = this.shadowRoot.querySelector('.destination-card-summary')
    cardDescriptionElement.textContent = descriptionText
  }
}

window.customElements.define('destination-card', DestinationCard)
