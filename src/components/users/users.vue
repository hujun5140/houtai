<template>
    <div>
        用户列表
    </div>
</template>
<script>
// import { getusers } from '@/api'
import { getusers } from '@/api/api.js'
export default {
    name: 'Users',
    created(){
        const params = {
            query: '',
            pagenum:1,
            pagesize:10
        }
        getusers(params).then(res=>{
            console.log(res)
        })
    }
}
</script>
<style lang="scss">
    
</style>