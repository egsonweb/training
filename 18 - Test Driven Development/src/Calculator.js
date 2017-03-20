var calculator = {
    add: function(a, b) {
        if (a === undefined || b === undefined) {
            throw new Error('Missing params');
        }

        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new Error('Invalid type');
        }

        return a+b;
    },
    subtract: function(a, b) {
        if (a === undefined || b === undefined) {
            throw new Error('Missing params');
        }

        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new Error('Invalid type');
        }

        return a-b;
    }
};