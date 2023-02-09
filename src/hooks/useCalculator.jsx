export default function useCalculator(){
    return {
        add(numbers){
            let total = numbers.reduce((total, item) => total+item)
            return total;
        },
        subtract(numbers){
            let total = numbers.reduce((total, item) => {
                if(total === 0)
                    return total
                return total - item
            })
            return total
        },
        multiply(numbers){
            let total = numbers.reduce((total, item) => {
                if(total === 0)
                    return total
                if(numbers.length <= 1)
                    return item
                return total*item
            })
            return total
        },
        divide(numbers){
            let total = numbers.reduce((total, item) => {
                if(total === 0)
                    return total
                if(numbers.length <= 1)
                    return item
                return total/item
            })
            return total
        }
    }
}