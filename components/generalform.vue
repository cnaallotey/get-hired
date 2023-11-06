<template>
  <form class="space-y-8 divide-y divide-gray-200 px-4">
    <div class="space-y-8 divide-y divide-gray-200">
      <div>
        <div class="pt-0">
          <div>
            <h3 class="text-lg leading-6 font-medium text-gray-900">
              Personal Information
            </h3>
            <p class="mt-1 text-sm text-gray-500">
              Use a permanent address where you can receive mail.
            </p>
          </div>
          <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            <div class="sm:col-span-3">
              <label for="first-name" class="block text-sm font-medium text-gray-700">
                First name
              </label>
              <div class="mt-1">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autocomplete="given-name"
                  class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div class="sm:col-span-3">
              <label for="last-name" class="block text-sm font-medium text-gray-700">
                Last name
              </label>
              <div class="mt-1">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autocomplete="family-name"
                  class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div class="sm:col-span-6">
              <label for="photo" class="block text-sm font-medium text-gray-700">
                Photo
              </label>
              <div class="mt-1 flex items-center">
                <span class="h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                  <svg
                    class="h-full w-full text-gray-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </span>
                <button
                  type="button"
                  class="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Change
                </button>
              </div>
            </div>

            <div class="sm:col-span-4">
              <label for="email" class="block text-sm font-medium text-gray-700">
                Date of Birth
              </label>
              <div class="mt-1">
                <input
                  id="date of birth "
                  name="DOB"
                  type="date"
                  autocomplete="date"
                  class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div class="sm:col-span-4">
              <label for="email" class="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <div class="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autocomplete="email"
                  class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div class="sm:col-span-3">
              <label for="country" class="block text-sm font-medium text-gray-700">
                Country
              </label>
              <div class="mt-1">
                <select
                  id="country"
                  name="country"
                  autocomplete="country-name"
                  class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                >
                  <option>Ghana</option>
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Mexico</option>
                </select>
              </div>
            </div>

            <div class="sm:col-span-6">
              <label for="street-address" class="block text-sm font-medium text-gray-700">
                Location
              </label>
              <div class="mt-1">
                <input
                  type="text"
                  name="street-address"
                  id="street-address"
                  autocomplete="street-address"
                  class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div class="sm:col-span-6">
              <label for="about" class="block text-sm font-medium text-gray-700">
                Professional Summary
              </label>
              <div class="mt-1">
                <textarea
                  id="about"
                  name="about"
                  rows="3"
                  class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md"
                />
              </div>
              <p class="mt-2 text-sm text-gray-500">
                Write a few sentences about yourself.
              </p>
            </div>

            <div class="sm:col-span-6">
              <label for="street-address" class="block text-sm font-medium text-gray-700">
                Add Skills
              </label>
              <div class="mt-1">
                <input
                  type="text"
                  name="street-address"
                  id="street-address"
                  autocomplete="street-address"
                  class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
                <div class="w-full flex flex-wrap space-x-2 space-y-2 mt-2">
                  <Skill />
                </div>
              </div>
            </div>

            <div class="sm:col-span-6">
              <label for="CV" class="block text-sm font-medium text-gray-700">
                Import CV
              </label>
              <div class="mt-1">
                <input
                  type="file"
                  name="CV"
                  id="CV"
                  accept=".pdf"
                  class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>

            <fieldset class="mt-4 sm:col-span-6">
              <div>
                <legend class="text-base font-medium text-gray-900">
                  Job Availability
                </legend>
                <p class="text-sm text-gray-500">
                  These will determine what jobs we will refer to you.
                </p>
              </div>
              <div class="mt-4 space-y-4">
                <div class="flex items-center">
                  <input
                    id="push-everything"
                    name="push-notifications"
                    type="radio"
                    class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                  />
                  <label
                    for="push-everything"
                    class="ml-3 block text-sm font-medium text-gray-700"
                  >
                    Part Time
                  </label>
                </div>
                <div class="flex items-center">
                  <input
                    id="push-email"
                    name="push-notifications"
                    type="radio"
                    class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                  />
                  <label
                    for="push-email"
                    class="ml-3 block text-sm font-medium text-gray-700"
                  >
                    Full Time
                  </label>
                </div>
                <div class="flex items-center">
                  <input
                    id="push-nothing"
                    name="push-notifications"
                    type="radio"
                    class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                  />
                  <label
                    for="push-nothing"
                    class="ml-3 block text-sm font-medium text-gray-700"
                  >
                    Contracts and Internships
                  </label>
                </div>
              </div>
            </fieldset>
          </div>
        </div>
      </div>
    </div>

    <div class="pt-5">
      <div class="flex justify-end">
        <button
          type="submit"
          class="ml-3 inline-flex justify-center py-2 px-8 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Save
        </button>
      </div>
    </div>
  </form>
</template>

<script setup>
import Skill from "./skill.vue";
</script>
