<template>
    <div class="main">
        <div class="logo_holder">
            <div class="logo">
                <div class="img"></div>
                <img src="">
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

@import "../styles";
.main
{
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    padding-bottom: 2rem;
    padding-top: 2rem;

    @include mobile
    {
        // width: 100rem;
        flex-flow: column;
        align-content: center;
        align-items: center;
    }
}

.logo_holder
{
    width: 100%;
    display: flex;
    justify-content: center;
    height: 15rem;

    @include mobile
    {
        flex-flow: column;
        align-content: center;
        align-items: center;
        height: 10rem;
    }
}

.logo
{
    text-align: center;
    height: 100%;
    width: 100%;
}

.img
{
    background-image: url("../assets/Asset 11.png");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;
    height: 100%;

}

</style>