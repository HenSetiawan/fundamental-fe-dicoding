class SearchBar extends HTMLElement{

    connectedCallback(){
        this.placehorder=this.getAttribute('placeholder')
        this.render()
    }

    render(){
        this.innerHTML=`<input type="text" placeholder="${this.placehorder}" class="search">
                        <button type="button" class="btn-search">Cari</button>`
        this.querySelector('.btn-search').addEventListener("click", this._clickEvent);
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }


    get value(){
        return this.querySelector('.search').value
    }
}

customElements.define('search-bar',SearchBar)

