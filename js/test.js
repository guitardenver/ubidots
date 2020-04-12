class ToggleDivs {
    constructor(div1, div2) {
        this.div1 = div1;
        this.div2 = div2;
        this.state = 0;
    }

    toggle() {
        if(state) {
            this.div1.style.display = 'block';
            this.div2.style.display = 'none';
        }else {
            this.div1.style.display = 'none';
            this.div2.style.display = 'block';
        }

        state ^= 1;        
    }
}
