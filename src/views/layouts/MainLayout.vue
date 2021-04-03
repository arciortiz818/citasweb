<template>
    <b-container class="main-content bg-info">
        <b-row class="header">
            <b-col class="header-img">
                <img src="https://www.alianzadiagnostica.com/images/logo-img.png" alt="">
            </b-col>
            <b-col class="header-date">
                3 de Abril de 2021
            </b-col>
        </b-row>
        <b-row class="content-center">
            <b-col cols="4" class="side-menu">
                <b-card bg-variant="info" text-variant="white" class="text-left card-personal-info" >
                    <b-card-text class="text-name-user"><span >Javier Eduardo Arciniegas Ortiz</span></b-card-text>
                    <b-card-text class="text-profile"><span >Perfil: Cotizante</span></b-card-text>
                </b-card>
                <div class="accordion" role="tablist">
                    <b-card no-body class="mb-1">
                        <b-card-header header-tag="header" class="p-1" role="tab">
                            <b-button block size="lg" v-b-toggle.accordion-1 variant="info">Citas Médicas</b-button>
                        </b-card-header>
                        <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
                            <b-list-group>
                                <b-list-group-item href="#some-link"><b-card-text>Solicitar Cita</b-card-text></b-list-group-item>
                                <b-list-group-item href="#some-link"><b-card-text>Solicitar Cita Salud Directa</b-card-text></b-list-group-item>
                                <b-list-group-item href="#some-link"><b-card-text>Consultar Citas</b-card-text></b-list-group-item>
                                <b-list-group-item href="#some-link"><b-card-text>Cancelar Citas</b-card-text></b-list-group-item>
                            </b-list-group>
                        </b-collapse>
                    </b-card>
                    <b-card no-body class="mb-1">
                        <b-card-header header-tag="header" class="p-1" role="tab">
                            <b-button block size="lg" v-b-toggle.accordion-1 variant="info">Cerrar Sesión</b-button>
                        </b-card-header>                        
                    </b-card>
                </div>
            </b-col>
            <b-col class="content">
                <b-card>
                    <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
                    <router-view/>
                </b-card>
            </b-col>
        </b-row>
    </b-container>
</template>

<style>


    .main-content{
        /* background-color: blue; */
        height: 100vh;
        padding-left: 1.5vw !important;
        padding-right: 1.5vw !important;
        padding-top: 3vh;
    }
    .header{
        border-top-left-radius: 15px;
        border-top-right-radius: 15px;
        height: 15vh;
        background-color: white;
        margin-bottom: 1vh;
    }

    .header-img{
        margin-top: auto;
        margin-bottom: auto;
        margin-left: 3vw;
    }

    .header-date{
        text-align: end;
        margin-top: auto;
        margin-bottom: 2vh;
        margin-right: 5vw;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: 1vw;
        font-style: italic;
        font-weight: bolder;
        color: blue;
    }

    .content-center{
        background-color: whitesmoke;
        height: 80vh;
        padding-top: 2vh;
    }

    .side-menu{
        width: 10vw;
        padding-right: 0px !important;
    }


    .content .card{
        height: 95%;
    }

    .card-personal-info{
        margin-bottom: 2vh;
    }

    .text-name-user{
        font-size: 1.5rem;
        font-weight: bolder;
        font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        margin-bottom: 0px !important;
    }

    .text-profile{
        font-size: 1rem;
        font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        margin-top: 0px !important;
    }

</style>