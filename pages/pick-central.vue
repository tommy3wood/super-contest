<template>
    <div class="card">
        <DataTable v-model:expandedRows="expandedRows" :value="picks" dataKey="id" @rowExpand="onRowExpand"
            @rowCollapse="onRowCollapse" tableStyle="min-width: 60rem">
            <template #header>
                <div class="flex flex-wrap justify-end gap-2" v-if="faveDisabled || dogDisabled || overDisabled || underDisabled">
                    <h5>Your Picks</h5>
                    <Button v-if="faveDisabled" @click="clearFave" severity="danger" size="small">{{ userPicks.favorite.team }} {{ userPicks.favorite.spread }}</Button>
                    <Button v-if="dogDisabled" @click="clearDog" severity="danger" size="small">{{ userPicks.dog.team }} {{ userPicks.dog.spread }}</Button>
                    <Button v-if="overDisabled" @click="clearOver" severity="danger" size="small">{{ userPicks.over.game }} {{ userPicks.over.over }}</Button>
                    <Button v-if="underDisabled" @click="clearUnder" severity="danger" size="small">{{ userPicks.under.game }} {{ userPicks.under.under }}</Button>
                </div>
                <div class="flex flex-wrap justify-end gap-2">
                    <Button text icon="pi pi-plus" label="Expand All" @click="expandAll" />
                    <Button text icon="pi pi-minus" label="Collapse All" @click="collapseAll" />
                </div>
            </template>
            <Column expander style="width: 5rem" />
            <Column field="game" header="Teams"></Column>
            <template #expansion="slotProps">
                <div class="p-4">
                    <h5>Numbies for {{ slotProps.data.game }}</h5>
                    <div>
                        <Button @click="addFavorite(slotProps.data.game, slotProps.data.pickData.favorite.team, slotProps.data.pickData.favorite.spread)" :disabled="faveDisabled || (userPicks.dog.game === slotProps.data.game)" class="mr-3">{{ slotProps.data.pickData.favorite.team }} {{ slotProps.data.pickData.favorite.spread }}</Button>
                        <Button @click="addDog(slotProps.data.game, slotProps.data.pickData.dog.team, slotProps.data.pickData.dog.spread)" :disabled="dogDisabled || (userPicks.favorite.game === slotProps.data.game)" class="mr-3">{{ slotProps.data.pickData.dog.team }} +{{ slotProps.data.pickData.dog.spread }}</Button>
                        <Button @click="addOver(slotProps.data.game, slotProps.data.pickData.over)" :disabled="overDisabled || (userPicks.under.game === slotProps.data.game)" class="mr-3">Over:{{ slotProps.data.pickData.over }}</Button>
                        <Button @click="addUnder(slotProps.data.game, slotProps.data.pickData.under)" :disabled="underDisabled || (userPicks.over.game === slotProps.data.game)" class="mr-3">Under:{{ slotProps.data.pickData.under }}</Button>
                    </div>
                </div>
            </template>
        </DataTable>
        <div>
            {{ userPicks }}
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const picks = ref([
    {
        'id': '1',
        'game': 'Browns vs. Cowboys',
        'pickData': {
            'favorite': {
                'team': 'CLE',
                'spread': -2.5
            },
            'dog': {
                'team': 'DAL',
                'spread': 2.5
            },
            'over': 45.5,
            'under': 45.5
        }
    },
    {
        'id': '2',
        'game': 'Chiefs vs. Ravens',
        'pickData': {
            'favorite': {
                'team': 'KC',
                'spread': -2.5
            },
            'dog': {
                'team': 'BAL',
                'spread': 2.5
            },
            'over': 45.5,
            'under': 45.5
        }
    }
]);

const userPicks = ref({
    'favorite': {
        'game': '',
        'team': '',
        'spread': null,
        'lockTime': null
    },
    'dog': {
        'game': '',
        'team': '',
        'spread': null,
        'lockTime': null
    },
    'over': {
        'game': '',
        'over': null,
        'lockTime': null
    },
    'under': {
        'game': '',
        'under': null,
        'lockTime': null
    }
})

const addFavorite = (game, team, spread) => {
    userPicks.value.favorite.game = ''
    userPicks.value.favorite.game = game

    userPicks.value.favorite.team = ''
    userPicks.value.favorite.team = team

    userPicks.value.favorite.spread = null
    userPicks.value.favorite.spread = spread

    faveDisabled.value = true
}

const addDog = (game, team, spread) => {
    userPicks.value.dog.game = ''
    userPicks.value.dog.game = game

    userPicks.value.dog.team = ''
    userPicks.value.dog.team = team

    userPicks.value.dog.spread = null
    userPicks.value.dog.spread = spread

    dogDisabled.value = true
}

const addOver = (game, over) => {
    userPicks.value.over.game = ''
    userPicks.value.over.game = game

    userPicks.value.over.over = null
    userPicks.value.over.over = over

    overDisabled.value = true
}

const addUnder = (game, under) => {
    userPicks.value.under.game = ''
    userPicks.value.under.game = game

    userPicks.value.under.under = null
    userPicks.value.under.under = under

    underDisabled.value = true
}

const clearFave = () => {
    userPicks.value.favorite.game = ''
    userPicks.value.favorite.team = ''
    userPicks.value.favorite.spread = null

    faveDisabled.value = false
}

const clearDog = () => {
    userPicks.value.dog.game = ''
    userPicks.value.dog.team = ''
    userPicks.value.dog.spread = null

    dogDisabled.value = false
}

const clearOver = () => {
    userPicks.value.over.game = ''
    userPicks.value.over.over = null

    overDisabled.value = false
}

const clearUnder = () => {
    userPicks.value.under.game = ''
    userPicks.value.under.under = null

    underDisabled.value = false
}

const faveDisabled = ref(false)
const dogDisabled = ref(false)
const overDisabled = ref(false)
const underDisabled = ref(false)


// ui BS 
const expandedRows = ref({});

const expandAll = () => {
    expandedRows.value = picks.value.reduce((acc, p) => (acc[p.id] = true) && acc, {});
};
const collapseAll = () => {
    expandedRows.value = null;
};
</script>
