class Mask {

    constructor(element) {
        /** @private @const */
        this.element_ = element;
    }

    /**
     * @param {string} mask
     * @param {boolean} reverse
     */

    mask(mask, reverse) {
        reverse ? this.reverseMask(mask) : this.normalMask(mask);
    }

    /**
     * @private
     * @param {string} mask
     */

    normalMask(mask) {
        this.element_.value = this.getMaskered(mask, this.element_.value);
    }

    /**
     * @private 
     * @param {string} mask
     */

    reverseMask(mask) {
        mask = this.reverseString(mask);
        let value = this.reverseString(this.element_.value);
        let result = this.getMaskered(mask, value);
        this.element_.value = this.reverseString(result);
    }

    /**
     * @private 
     * @param {string} mask
     * @param {string} string
     */

    getMaskered(mask, string) {
        string = string.replace(/[\W]/g, '');
        let ret = '';
        for(let i = 0, j = 0; i <= mask.length - 1; i++) {
            if (string[j] == undefined) {
                break;
            }
            ret += mask[i] == '#' ? string[j++] : mask[i];
        }
        return ret;
    }

    /**
     * @private 
     * @param {string} string
     */
    
    reverseString(string) {
        return string.split('').reverse().join('');
    }
}
