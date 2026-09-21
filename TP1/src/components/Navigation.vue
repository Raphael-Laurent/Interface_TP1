<template>
    <section id="topComponent">
        <RouterLink to="/">TP1 - Vue.js</RouterLink>
        <div id="rightLinks">
            <RouterLink to="/admin">Panier</RouterLink>
            <RouterLink to="/admin">Admin</RouterLink>
        </div>
    </section>
</template>

<style scoped>
#topComponent {
    background-color: grey;
    height: 4rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
    font-size: 1.5rem;
    margin: 0 0 1rem 0;
    color: black;
}

#rightLinks {
    display: flex;
    gap: 1.5rem;
    align-items: center;
}

#topComponent a {
    text-decoration: none;
    color: black;
}
</style>