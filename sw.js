// تسجيل اسم الكاش 
const cachname = "mate-v2" ;  
// الملفات الرئيسية الى هيتعمل لها كاش فى الموقع
const assits = [ 
"/" ,  
"index.html" ,  
"index.js" ,  
"style.css" ,  

]
self.addEventListener("install" ,(insevent)=> {
    // علشان الايفينت يستنى لحد ما الى جواه يتنفذ
    if(caches.keys.length == 0) {
        insevent.waitUntil(
            // علشان نفتح الكاش 
            
            caches.open(cachname).then((cash) => {
                // cash.addAll()
                // علشان يسجل كل الملفات الى فى الارى فى الكاش
    
                cash.addAll(assits).then().catch()
            }).catch((cashErr) => {
                
            })
            // علشان نفتح الكاش  
    
        ) 
    }

})

self.addEventListener("activate" , (activeevent) => {
    // حذف ملفات الكاش القديمة علشن يشتغل الجديدة
    activeevent.waitUntil (
        
        caches.keys().then((kays) => {
            return Promise.all(
                kays.filter((key) => key != cachname)
                .map((key) => { caches.delete(key)
                })
                )
            }).catch((err) =>{})
            
            )
}) ;
// self.addEventListener("fetch" , (fetchEvent) => {
//     // جلب الملفات من الكاش اولا ثم من الانترنت
//     // console.log(fetchEvent)
//     fetchEvent.respondWith(
//         caches.match(fetchEvent.request).then(async () => {
//         // جلب ملفات الكاش اولا ثم من السيرفر
//         const fetchtes = await fetch(fetchEvent.request);
//             const cash = await caches.open(cachname);
//             cash.put(fetchEvent.request, fetchtes.clone());
//             return await fetchtes;
//     }).catch((rgect) => {})

//     )
// })



self.addEventListener("fetch" , (fetchEvent) => {
    // جلب الملفات من الكاش اولا ثم من الانترنت

    // console.log(fetchEvent)
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then((res) => {
        // جلب ملفات الكاش اولا ثم من السيرفر
        return res || fetch(fetchEvent.request).then(async (fetchtes) => {
            const cash = await caches.open(cachname);
            cash.put(fetchEvent.request, fetchtes.clone());
            return fetchtes;
        })

    }).catch((rgect) => {})

    )
})


