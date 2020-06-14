class appBar extends HTMLElement{

    connectedCallback(){
        this.render()
    }

    render(){
        this.innerHTML=`<h2>JadwalKu</>`
    }
}

customElements.define('app-bar',appBar)