<template>
  <section class="bg-white dark:bg-gray-900 mt-10 w-full h-full min-h-screen">
  <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">{{$t('contact')}}</h2>
      <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">{{$t('contact_description')}}</p>
      <Form :validation-schema="validationSchema" @submit="submitData" method="post" class="space-y-8">
          <div>
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">{{$t('your_email')}}</label>
              <Field name="email" as="input" type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" />
              <ErrorMessage name="email" v-model="form.email" class="text-red-500 text-sm" />
          </div>
          <div>
              <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">{{$t('subject')}}</label>
              <Field name="subject" v-model="form.subject" type="text" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" />
              <ErrorMessage name="subject" class="text-red-500 text-sm" />
          </div>
          <div class="sm:col-span-2">
              <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">{{$t('your_message')}}</label>
              <Field name="message" v-model="form.message" as="textarea" id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..." required />
              <ErrorMessage name="message" class="text-red-500 text-sm" />
          </div>
          <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">{{$t('send_message')}}</button>
      </Form>
  </div>
</section>
</template>

<script>
import { Field, Form, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';
import axios from 'axios';

export default{
  name: 'Contact',
  components: {
    Field,
    Form,
    ErrorMessage
  },
  data(){
    return {
      form: {
        subject: '',
        email: '',
        message: ''
      },
      validationSchema : yup.object({
        email: yup.string().email().required(),
        subject: yup.string().required(),
        message: yup.string().required()
      })
    }
  },
  methods: {
        async handleSubmit() {
            try{
                this.loading=true
                const response = await axios.post('https://68648e915b5d8d03397d8138.mockapi.io/api/v1/users',
                {
                    email:this.form.email,
                    subject:this.form.subject,
                    message:this.form.message
                })
                this.loading=true

                console.log('Form submitted successfully:',response.data);
                this.form={
                    subject:'',
                    email:'',
                    message:''
                };
                //alert('user create success');
               // this.$router.push('/users');
            }
            catch (error) {
                console.error('Error submitting form:', error)
                return
            }
            console.log('Form submitted:', this.form)
            // You can add validation or API calls here
        },
        async submitData() {
      const url = import.meta.env.VITE_GOOGLE_SCRIPT_WEB_APP_URL;
      try {
        const res = await axios.post(url, {
          subject: this.form.subject,
          email: this.form.email,
          message: this.form.message
        },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        });
        alert('Data submitted!');
      } catch (err) {
        console.error(err);
        alert('Error submitting data');
      }
    }
}
}
</script>
