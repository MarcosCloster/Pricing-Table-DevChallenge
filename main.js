const plans = {
    free : {
        name: 'Free',
        price: '$0',
        paymentTime: 'Per month',
        websiteNumber: '01',
        serverStorage: '100 GB',
        database: null,
        unmeteredBandwidth: false,
        ssdDisk: false,
        vcpusFontworld: false,
        worldpressInstall: false,
        serverSpeed: false
    },
    team : {
        name: 'Team',
        price: '$59',
        paymentTime: 'Per month',
        websiteNumber: '10',
        serverStorage: '500 GB',
        database: '15',
        unmeteredBandwidth: true,
        ssdDisk: false,
        vcpusFontworld: false,
        worldpressInstall: false,
        serverSpeed: false
    },
    popular : {
        name: 'Popular',
        price: '$99',
        paymentTime: 'Per month',
        websiteNumber: '50',
        serverStorage: '1 TB',
        database: 'Unlimited',
        unmeteredBandwidth: true,
        ssdDisk: true,
        vcpusFontworld: true,
        worldpressInstall: true,
        serverSpeed: true
    },
    enterprise : {
        name: 'Enterprise',
        price: '$299',
        paymentTime: 'Per month',
        websiteNumber: 'Unlimited',
        serverStorage: 'Unlimited',
        database: 'Unlimited',
        unmeteredBandwidth: true,
        ssdDisk: true,
        vcpusFontworld: true,
        worldpressInstall: true,
        serverSpeed: true
    }
}

const services = [
    'Website Number',
    'Server storage',
    'Database',
    'Unmetered Bandwidth',
    'SSD Disk',
    'VCPUS Fontworld',
    'Worldpress install',
    'Server speed'
]

document.addEventListener('DOMContentLoaded', () => {
    
    
    const headerPlans = document.getElementById('headerPlans')
    Object.values(plans).forEach(plan => {
        let thPlan = crearHeaderTabla(plan)
        headerPlans.appendChild(thPlan)
    })

    const bodyPlans = document.getElementById('bodyPlans')
    services.forEach(service => {
        crearBodyTabla(service, bodyPlans)
    })

    const trButton = document.createElement('tr')
    const tdEmpty = document.createElement('td')
    trButton.appendChild(tdEmpty)
    
    Object.values(plans).forEach(plan => {
        const tdPlanButton = document.createElement('td')
        tdPlanButton.className= 'text-center'
        const aPlan = document.createElement('a')
        aPlan.textContent = 'Get Started'
        aPlan.className = 'text-center cursor-pointer'
        tdPlanButton.appendChild(aPlan)

        trButton.appendChild(tdPlanButton)
    })

    bodyPlans.appendChild(trButton)
})


function crearHeaderTabla(plan) {
    const thPlan = document.createElement('th')

    const namePlan = document.createElement('p')
    namePlan.textContent = plan.name
    namePlan.className = 'text-min text-planName font-normal'

    const pricePlan = document.createElement('h2')
    pricePlan.textContent= plan.price
    pricePlan.className = 'text-5xl font-semibold"'

    const paymentTimePlan = document.createElement('p')
    paymentTimePlan.textContent = plan.paymentTime
    paymentTimePlan.className = 'text-min text-paymentTime font-normal'

    thPlan.appendChild(namePlan)
    thPlan.append(pricePlan)
    thPlan.appendChild(paymentTimePlan)

    return thPlan
}

function crearBodyTabla(service, bodyPlan){
    const trService = document.createElement('tr')
    const tdName = document.createElement('td')
    tdName.textContent = service
    tdName.className = 'font-bold text-lg'
    trService.appendChild(tdName)

    if(service == 'Website Number'){
        Object.values(plans).forEach(plan => {
            const tdWebsite = document.createElement('td')
            tdWebsite.textContent = plan.websiteNumber
            tdWebsite.className = 'text-center text-lg'
            trService.appendChild(tdWebsite)
        })
    } else if (service == 'Server storage'){
        Object.values(plans).forEach(plan => {
            const tdServer = document.createElement('td')
            tdServer.textContent = plan.serverStorage
            tdServer.className = 'text-center text-lg'
            trService.appendChild(tdServer)
        })
    } else if (service == 'Database'){
        Object.values(plans).forEach(plan => {
            const tdDatabase = document.createElement('td')
            if(plan.database != null){
                tdDatabase.textContent = plan.database
            } else{
                tdDatabase.textContent = '-'
            }
            tdDatabase.className = 'text-center text-lg'
            trService.appendChild(tdDatabase)
        })
    } else if (service == 'Unmetered Bandwidth'){
        Object.values(plans).forEach(plan => {
            const tdUnmetered = document.createElement('td')
            if(plan.unmeteredBandwidth != false){
                tdUnmetered.textContent = '✔';
            } else{
                tdUnmetered.textContent = '-'
            }
            tdUnmetered.className = 'text-center text-lg'
            trService.appendChild(tdUnmetered)
        })
    } else if (service == 'SSD Disk'){
        Object.values(plans).forEach(plan => {
            const tdSdd = document.createElement('td')
            if(plan.ssdDisk != false){
                tdSdd.textContent = '✔';
            } else{
                tdSdd.textContent = '-'
            }
            tdSdd.className = 'text-center text-lg'
            trService.appendChild(tdSdd)
        })
    } else if (service == 'VCPUS Fontworld'){
        Object.values(plans).forEach(plan => {
            const tdVcpus = document.createElement('td')
            if(plan.vcpusFontworld != false){
                tdVcpus.textContent = '✔';
            } else{
                tdVcpus.textContent = '-'
            }
            tdVcpus.className = 'text-center text-lg'
            trService.appendChild(tdVcpus)
        })
    } else if (service == 'Worldpress install'){
        Object.values(plans).forEach(plan => {
            const tdWorldpress = document.createElement('td')
            if(plan.worldpressInstall != false){
                tdWorldpress.textContent = '✔';
            } else{
                tdWorldpress.textContent = '-'
            }
            tdWorldpress.className = 'text-center text-lg'
            trService.appendChild(tdWorldpress)
        })
    } else {
        Object.values(plans).forEach(plan => {
            const tdServerSpeed = document.createElement('td')
            if(plan.serverSpeed != false){
                tdServerSpeed.textContent = '✔';
            } else{
                tdServerSpeed.textContent = '-'
            }
            tdServerSpeed.className = 'text-center text-lg'
            trService.appendChild(tdServerSpeed)
        })
    }
    bodyPlans.appendChild(trService)
}