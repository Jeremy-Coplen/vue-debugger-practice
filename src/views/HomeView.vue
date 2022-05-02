<script>
    export default {
        data() {
            return {
                count: 0,
                message: "Nothing to report"
            }
        },

        methods: {
            decrement() {
                console.log(this.message)
                this.count--
                this.message = "Counter value was decreased"
                console.log(this.message)
            },

            increment() {
                console.log(this.message)
                this.count++
                this.message="Counter value was increased"
                console.log(this.message)
            }
        },
    }
</script>

<template>
    <div id="home">
        <div id="counter-container">
            <h1>Count:</h1>
            <p id="number">{{ count }}</p>
        </div>
        <div id="button-container">
            <button @click="decrement">Decrement</button>
            <button @click="increment">Increment</button>
        </div>
    </div>
</template>

<style>
    #home {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100vw;
    }

    #number {
        font-size: 30px;
    }

    #home h1 {
        margin-right: 5px;
    }

    #counter-container {
        display: flex;
        flex-direction: row;
        justify-content: center;
        width: 100vw;
        margin-bottom: 10px;
    }

    #button-container  :first-child{
        margin-right: 10px;
    }

    #button-container button {
        width: 100px;
        height: 30px;
        background-color: #40B280;
        border: none;
        border-radius: 10px;
    }

    #button-container button:hover {
        background-color: #126440;
        cursor: pointer;
    }
</style>