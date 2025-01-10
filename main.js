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
        if(plan.name == 'Popular'){
            thPlan.className = 'bg-[#121826] rounded-t-xl'
        }
        headerPlans.appendChild(thPlan)
    })

    const bodyPlans = document.getElementById('bodyPlans')
    services.forEach(service => {
        crearBodyTabla(service, bodyPlans)
    })

    const trButton = document.createElement('tr')
    const tdEmpty = document.createElement('td')
    trButton.appendChild(tdEmpty)
    let i = 1
    
    Object.values(plans).forEach(plan => {
        const tdPlanButton = document.createElement('td')
        const aPlan = document.createElement('a')
        aPlan.textContent = 'Get Started ➔'
        aPlan.className = 'text-center cursor-pointer'
        if(i === 3){
            tdPlanButton.className= 'bg-[#7C4F1E] text-center rounded-b-xl text-white py-6'
        } else {
            tdPlanButton.className= 'text-center text-planName py-6'
        }
        tdPlanButton.appendChild(aPlan)
        trButton.appendChild(tdPlanButton)
        i++
    })
    bodyPlans.appendChild(trButton)
})


function crearHeaderTabla(plan) {
    const thPlan = document.createElement('th')

    const divPlan = document.createElement('div');
    divPlan.className = 'flex justify-center items-center w-full py-4';

    const namePlan = document.createElement('p');
    namePlan.textContent = plan.name;
    if (plan.name != 'Popular') {
        namePlan.className = 'text-base text-planName font-semibold inline-block text-center';
    } else {
        namePlan.className = 'text-base text-planName font-semibold text-white bg-blue-900 inline-block text-center rounded-full px-6';
    }
    divPlan.appendChild(namePlan);

    const pricePlan = document.createElement('h2')
    pricePlan.textContent= plan.price
    
    if(plan.name != 'Popular'){
        pricePlan.className = 'text-5xl font-semibold pb-4'
    } else {
        pricePlan.className = 'text-5xl font-semibold text-white '
    }

    const paymentTimePlan = document.createElement('p')
    paymentTimePlan.textContent = plan.paymentTime
    
    if(plan.name != 'Popular'){
        paymentTimePlan.className = 'text-base text-paymentTime font-normal pb-8'
    } else {
        paymentTimePlan.className = 'text-base text-paymentTime font-normal text-white pb-8'
    }

    thPlan.appendChild(divPlan)
    thPlan.append(pricePlan)
    thPlan.appendChild(paymentTimePlan)

    return thPlan
}

function crearBodyTabla(service, bodyPlans){
    const trService = document.createElement('tr')

    const tdName = document.createElement('td')
    tdName.textContent = service
    tdName.className = 'font-bold text-lg'
    trService.appendChild(tdName)

    if(service == 'Website Number'){
        Object.values(plans).forEach(plan => {
            const tdWebsite = document.createElement('td')
            tdWebsite.textContent = plan.websiteNumber
            
            if(plan.name == "Popular"){
                tdWebsite.className = 'text-center text-lg bg-[#121826] text-white pb-4'
            } else {
                tdWebsite.className = 'text-center text-lg pb-4' 
            }
            trService.appendChild(tdWebsite)
        })
    } else if (service == 'Server storage'){
        Object.values(plans).forEach(plan => {
            const tdServer = document.createElement('td')
            tdServer.textContent = plan.serverStorage
            if(plan.name == "Popular"){
                tdServer.className = 'text-center text-lg bg-[#121826] text-white pb-4'
            } else {
                tdServer.className = 'text-center text-lg pb-4'
            }
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
            if(plan.name == "Popular"){
                tdDatabase.className = 'text-center text-lg bg-[#121826] text-white pb-4'
            } else {
                tdDatabase.className = 'text-center text-lg pb-4'
            }
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
            if(plan.name == "Popular"){
                tdUnmetered.className = 'text-center text-lg bg-[#121826] text-white pb-4'
            } else {
                tdUnmetered.className = 'text-center text-lg pb-4'
            }
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
            if(plan.name == "Popular"){
                tdSdd.className = 'text-center text-lg bg-[#121826] text-white pb-4'
            } else {
                tdSdd.className = 'text-center text-lg pb-4'
            }
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
            if(plan.name == "Popular"){
                tdVcpus.className = 'text-center text-lg bg-[#121826] text-white pb-4'
            } else {
                tdVcpus.className = 'text-center text-lg pb-4'
            }
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
            if(plan.name == "Popular"){
                tdWorldpress.className = 'text-center text-lg bg-[#121826] text-white pb-4'
            } else {
                tdWorldpress.className = 'text-center text-lg pb-4'
            }
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
            if(plan.name == "Popular"){
                tdServerSpeed.className = 'text-center text-lg bg-[#121826] text-white pb-4'
            } else {
                tdServerSpeed.className = 'text-center text-lg pb-4'
            }
            trService.appendChild(tdServerSpeed)
        })
    }
    bodyPlans.appendChild(trService)
}