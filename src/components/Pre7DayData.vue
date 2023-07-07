<template>
    <div class="pre">
        <h2>前七日數據:</h2>
        <div v-for="data in pre7Datas">
            <h3>{{ data.date }}</h3>
            <table>
                <thead>
                    <tr >
                        <th>時間</th>
                        <th>溫度</th>
                        <th>濕度</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="value in data.HTValue">
                        <td style="background-color: rgb(220, 215, 215);">{{ value.hour }}</td>
                        <td>{{ value.temp }}</td>
                        <td>{{ value.humid }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
  
<script setup>
import { ref, onMounted } from 'vue';
import { getPre7DayData } from '../api';

let pre7Datas = ref(0);

console.log(pre7Datas);
onMounted(async () => {
    pre7Datas.value = await getPre7DayData();
    console.log(pre7Datas);
});
</script>
  
<style lang="scss" scoped>
table {
    border-collapse: collapse;
    width: 100%;
    display: flex;
}

tbody {
    height: max-content;
}


th,
td {
    text-align: center;
    padding: 8px;
    display: block;
    border: 1px solid rgb(233, 231, 231);
}

th {
    background-color: #c9c5c5;
}
tr {
    display: inline-block;
}
// td:nth-child(odd){
//     background-color: rgb(220, 210, 210);

// }
</style>