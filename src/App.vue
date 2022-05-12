<template>
  <p>isReady: {{ isReady }}</p>
  <p>isActive: {{ isActive }}</p>

  <p>isWaiting: {{ isWaiting }}</p>
  <button v-on:click="next">next</button>

  <input type="text" placeholder="Firstname" v-model="firstName" />
  <input type="text" placeholder="Last name" v-model="lastName" />
  <button @click="addPerson(firstName, lastName)">add</button>
  <button @click="removePerson">RM</button>
  <ul>
    <li v-for="human in people">
      {{ human._firstName }} | {{ human._lastName }}
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

import abi from './abi';
import { ethers } from 'ethers';
import { ExternalProvider, Web3Provider } from '@ethersproject/providers';
4;

const contractPromise = (async () => {
  // @ts-ignore
  await window.ethereum.request({ method: 'eth_requestAccounts' });
  // @ts-ignore
  const provider = new Web3Provider(window.ethereum);

  const signer = provider.getSigner();

  const address = '0x45C58D14841306E39Bcd49e0fF2683F6fa198891'.toLowerCase();

  const contract = new ethers.Contract(address, abi, signer);

  return contract;
})();

export default defineComponent({
  name: 'App',
  setup: () => {
    const isActive = ref<boolean>(false);
    const isReady = ref<boolean>(false);
    const isWaiting = ref<boolean>(false);
    const firstName = ref<string>('');
    const lastName = ref<string>('');
    const people = ref([]);

    const listPeople = async () => {
      const contract = await contractPromise;
      const tx = await contract.allPeople();
      people.value = tx;
    };

    const addPerson = async (firstName: string, lastName: string) => {
      const contract = await contractPromise;
      const tx = await contract.addPerson(firstName, lastName);
      await tx.wait();
      await getState();
      await listPeople();
    };
    const getState = async () => {
      const contract = await contractPromise;
      isActive.value = await contract.isActive();
      isReady.value = await contract.isReady();
      isWaiting.value = await contract.isWaiting();
    };
    const removePerson = async () => {
      people.value = people.value.slice(1);
    };
    const next = async () => {
      const contract = await contractPromise;

      const tx = await contract.next();
      await tx.wait();
      await getState();
    };

    getState();
    listPeople();

    return {
      isActive,
      isReady,
      isWaiting,
      next,
      firstName,
      lastName,
      addPerson,
      people,
      removePerson,
    };
  },
});
</script>
