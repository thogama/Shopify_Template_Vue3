<template>
    <div   class="login-root d-flex align-items-center justify-content-center flex-column">


        <form   class="p-4  m-2" @submit="(e) => do_search(email, password, e)">
            <h1 class=" text-center text-white mb-5 fs-1 fw-bolder">Login</h1>
            <div class="shadow rounded bg-input-group p-1 d-flex align-items-center ">
                <font-awesome-icon class="p-2 iconed text-primary" icon="fa-solid fa-user" />
                <div class="vr m-1"></div>
                <input v-model="state.email" type="email" class="form-control" placeholder="name@example.com">

            </div>
            <p style="text-align: justify;" class="m-2  text-danger" v-if="v$.email.$error">
                {{ v$.email.$errors[0].$message }}
            </p>

            <div @click="selfalert()"  class="rounded shadow bg-input-group p-1 d-flex align-items-center ">
                <font-awesome-icon class="p-2 iconed text-primary" icon="fa-solid fa-key" />
                <div class="vr m-1"></div>
                <input v-model="state.password" type="password" class="form-control" placeholder="Password">
            </div>
            <p  class="m-2  text-danger" v-if="v$.password.$error">
                {{ v$.password.$errors[0].$message }}
            </p>

            <div class="mt-3 p-0 bg-transparent input-group-text">
                <input class="m-1  form-check-input mt-0" type="checkbox" value=""
                    aria-label="Checkbox for following text input">
                <p class="text-white m-0">Remember Me</p>
            </div>

            <button style="border: 1px solid #e87b36 ;font-weight: bolder;" @click="(e) => submitForm(e)" type="submit" class=" text-primary mt-5 p-3 col-12 btn bg-white shadow">
                Login
            </button>



        </form>
    </div>
</template>

<script lang="ts"  >
import { useVuelidate } from '@vuelidate/core'
import { required, email, minLength, helpers } from '@vuelidate/validators'


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
        async fetchLogin() {
            console.log("Login")
            return await useFetch('/login',
                {
                    method: "POST",
                    baseURL: "",
                    params: {},
                })
        },
        submitForm(e: Event) {
            e.preventDefault()
            this.v$.$validate()
            if (!this.v$.$error) {
                this.fetchLogin()
            }

        },
        selfalert(){
            console.log("digite certo sua bisca imunda")
        }

    }

}
</script>


<style scoped>
    @media only screen and (min-width: 992px) {
  .login-root {
    border-left:1px solid white;
  }
}
.bg-input-group {
    background-color: whitesmoke;
    margin-top: 15px;
    border: 1px solid gainsboro;

}


.bg-input-group:hover {
    border: 2.5px solid transparent;
}

.iconed {
    max-width: 0.9rem;
}
</style>