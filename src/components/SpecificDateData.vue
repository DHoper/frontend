<template>
    <div id="specific">
        <label for="date-picker">選擇日期:</label>
        <input type="date" max="2023-07-07" min="2023-06-01" id="date-picker" v-model="selectedDate">
        <button @click="getSpecificData">搜尋</button>
        <div class="showSearch">
            <div v-if="specificData">
            <h3>{{ specificData.date }}</h3>
            <table>
                <thead>
                    <tr style="background-color: black">
                        <th >時間</th>
                        <th>溫度</th>
                        <th>濕度</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="value in specificData.HTValue">
                        <td>{{ value.hour }}</td>
                        <td>{{ value.temp }}</td>
                        <td>{{ value.humid }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { getSpecificDateData } from '../api';

const selectedDate = ref('');
const specificData = ref(null);

async function getSpecificData() {
    if (!selectedDate.value) {
        alert('請選擇日期');
        return;
    }

    const data = await getSpecificDateData(selectedDate.value);
    console.log(data);
    specificData.value = data[0];
}
</script>
<style scoped>
.showSearch {
    border: solid 2px black;
    width: 60vw;
    height: 70vh;
    margin: auto;
    overflow: scroll;
}
table {
    border-collapse: collapse;
    width: 100%;
}

th,
td {
    text-align: center;
    padding: 8px;
    /* border: 1px solid black; */
}

th {
    background-color: #f2f2f2;
}
tr:nth-child(odd){
    background-color: rgb(220, 210, 210);

}
</style>