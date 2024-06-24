<script>
    import { goto } from "$app/navigation";


</script>

<section>
    <form on:submit={(e) => {
        e.preventDefault()
    }} >
    <button type="submit" on:click={(e) => {
        e.preventDefault()
        // send request to create ca id
        // if successful -->
        const response = {ok : true}
        if (response.ok){
            goto('http://localhost:5174/')
        }
    }}   />
</form>
</section>