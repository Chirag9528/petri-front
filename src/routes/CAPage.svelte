<script>
    import { goto } from "$app/navigation";
    import { URL } from "../util";

    
    $: LoginToCA = () => {
        // authenticate
        fetch(URL+'auth/',{
            method:'POST',
            headers:{
                'Content-type': 'application/json',
            },
            credentials: 'include',
            mode:'cors',

        }).then((res)=> res.json())
        .then((res) => {
            console.log(res)
            if (res.success){
                console.log("Sahi Hai")
                goto('/CAPage')
            }else{
                console.log("Not logged in")
                goto('/login?to=ca')
            }
        }).catch(err=>console.log(err));
    }

</script>


<section>
    <span class="ca_btn">
        <button on:click={LoginToCA}>CA Portal</button>
    </span>
</section>

<style>
    section{
        display: flex;
        height: 50px;
        width: 150px;
        left: -20px;
        top: 0;
        position: absolute;
        justify-content: center ;
        align-items: center;
        z-index: 999;
        background-color: #EF9A9A;
        transition: all 0.5s ease-in;
        cursor: pointer;
        box-shadow: 0 5px 5px 0px #757575;
    }
    .ca_btn > a{
        color: white;
    }
    .ca_btn > a:hover{
        text-decoration: none;
    }
    button{
        background-color: transparent;
        border: none;
    }
    section:hover{
        transform: translateX(10px);
    }
</style>