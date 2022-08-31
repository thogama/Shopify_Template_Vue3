<template>
    <form @submit="(e) => do_search(email, password, e)">
        <div class="col-12">

            <div class="bg-input-group p-1 d-flex align-items-center ">
                <font-awesome-icon class="p-2 iconed" icon="fa-solid fa-user" />
                <div class="vr m-1"></div>
                <input v-model="state.email" type="email" class="form-control" placeholder="name@example.com">

            </div>
            <p class=" p-1 text-danger" v-if="v$.email.$error">
                {{  v$.email.$errors[0].$message  }}
            </p>

            <div class="bg-input-group p-1 d-flex align-items-center ">
                <font-awesome-icon class="p-2 iconed" icon="fa-solid fa-key" />
                <div class="vr m-1"></div>
                <input v-model="state.password" type="password" class="form-control" placeholder="Password">
            </div>
            <p class="p-1  text-danger" v-if="v$.password.$error">
                {{  v$.password.$errors[0].$message  }}
            </p>
            <div class="row justify-content-center">
                <button @click="(e) => submitForm(e)" type="submit"
                    class="rounded-pill mt-5 p-3 col-10 btn btn-primary">
                    Login
                </button>
                <button style="border: 1px solid red;" type="submit"
                    class="text-danger rounded-pill mt-4   p-3 col-10 btn btn-outline-danger">
                    Google
                </button>
            </div>

        </div>
    </form>

</template>

<script lang="ts"  >
import { useVuelidate } from '@vuelidate/core'
import { required, email, minLength, helpers } from '@vuelidate/validators'







const do_search = async (email: string, password: string, e: Event) => {
    e.preventDefault()
}

export default {
    setup() {
        const myrequired = helpers.withMessage("Fill this field!", required)
        const myminLenght = helpers.withMessage("At least 6 characters!", minLength(6))
        const state = reactive({
            email: "",
            password: ""


        })
        const rules = computed(() => {
            return {
                email: { myrequired, email },
                password: { myrequired, myminLenght }
            }
        })
        const v$ = useVuelidate(rules, state)


        return {
            state,
            v$
        }
    },
    methods: {
        submitForm(e: Event) {
            e.preventDefault()
            this.v$.$validate()
            if (!this.v$.$error) {
                alert("submit")
            }
            
        }
    }

}
</script>

<style scoped>
.bg-input-group {
    background-color: whitesmoke;
    margin-top: 15px;
    border: 1px solid gainsboro;
}

.iconed {
    color: goldenrod;
    max-width: 0.9rem;
}
</style>