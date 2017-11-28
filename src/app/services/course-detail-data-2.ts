export const data2 = {
    "userInvitations": [],
    "certificateEnabled": true,
    "courseActivities": [{
        "id": "9f472e54-468a-45b8-8f17-1f0e21730bf1",
        "status": 2,
        "state": 4,
        "target": {
            "id": "bc2e802e-fb63-4f61-bf20-5bbc6b529ef1",
            "index": 1,
            "title": "Neptun KRÉTA e-Napló",
            "description": "",
            "parent": {"id": "fbf47133-b0a3-457b-94a9-2f924896e523"},
            "createdAt": "2017-03-02T10:22:07Z",
            "requirement": {
                "id": "bc2e802e-fb63-4f61-bf20-5bbc6b529ef1",
                "resultStartDate": "1753-01-01T12:00:00Z",
                "resultEndDate": "9999-12-31T23:59:59Z",
                "requiredForCompleted": true,
                "requiredForSatisfied": true,
                "rollupMethod": 2,
                "progressWeight": 1.0,
                "measureWeight": 1.0,
                "netTimeLimit": 5400,
                "grossTimeLimit": 172800,
                "grossLimitBase": 1,
                "netLimitOverride": true,
                "grossLimitOverride": true,
                "alwaysAvailable": true
            },
            "prerequisite": [],
            "serviceTechnicalProfile": 2,
            "label": ""
        },
        "result": {"remainingTime": 5400, "id": "9f472e54-468a-45b8-8f17-1f0e21730bf1"},
        "links": [{
            "rel": "Launch",
            "href": "https://nxtesthome.azurewebsites.net/ServiceStarter?courseActivityId=9f472e54-468a-45b8-8f17-1f0e21730bf1&courseId=a580f4aa-dd53-4215-b014-c9564f9e4c09&userId=d6ec1d11-3e82-4a68-8b0d-2eadba2d24bf&oauth_callback=about%3ablank&oauth_nonce=00f6a849-82ad-4bf9-a14d-5de2cd8983aa&oauth_consumer_key=hh234SFAASf_f3DSfasdf234SDAd22asdaS3sr33wF2323sd2&oauth_signature_method=HMAC-SHA1&oauth_timestamp=1509509100&oauth_version=1.0&oauth_signature=LVx5LZ40D1OVRTGgZ%2fDosRdtKhs%3d",
            "target": "_self",
            "label": "",
            "tooltip": ""
        }, {
            "rel": "Result",
            "href": "https://nxtesthome.azurewebsites.net/api/serviceresultdetails?serviceid=63da0850-d22e-ba15-21e3-7bb2c6f349ec&registrationid=f49d8887-ff19-41d2-a44f-df1fbcae0869",
            "target": "_self",
            "label": "",
            "tooltip": ""
        }]
    }, {
        "id": "a74b52c2-264d-4717-a69c-a96a01d937f6",
        "status": 2,
        "state": 4,
        "target": {
            "id": "fbf47133-b0a3-457b-94a9-2f924896e523",
            "title": "Root course object",
            "description": "",
            "createdAt": "2017-03-02T10:19:15Z",
            "requirement": {
                "id": "fbf47133-b0a3-457b-94a9-2f924896e523",
                "resultStartDate": "1753-01-01T12:00:00Z",
                "resultEndDate": "9999-12-31T23:59:59Z",
                "requiredForCompleted": true,
                "requiredForSatisfied": true,
                "rollupMethod": 2,
                "progressWeight": 1.0,
                "measureWeight": 1.0,
                "netTimeLimit": 5400,
                "grossTimeLimit": 172800,
                "grossLimitBase": 1,
                "netLimitOverride": true,
                "grossLimitOverride": true
            },
            "prerequisite": [],
            "label": ""
        },
        "result": {"remainingTime": 5400, "id": "a74b52c2-264d-4717-a69c-a96a01d937f6"},
        "links": [{
            "rel": "ContractReject",
            "href": "https://nxtesthome.azurewebsites.net/contracts/reject/f49d8887-ff19-41d2-a44f-df1fbcae0869",
            "target": "_self",
            "label": "",
            "tooltip": ""
        }, {
            "rel": "ProfileUpgrade",
            "href": "https://nxtesthome.azurewebsites.net/Account/LogOut?returnUrl=https%3a%2f%2fnxtestaccount.azurewebsites.net%2fProfile%2fIndex%3fdetailParam%3d3%26returnUrl%3dhttps%253a%252f%252fnxtestaccount.azurewebsites.net%252fUpdateDetailClaim%252fIndex%253freturnUrl%253dhttps%25253a%25252f%25252fnxtesthome.azurewebsites.net%25252fcourses%25252fa580f4aa-dd53-4215-b014-c9564f9e4c09",
            "target": "_self",
            "label": "",
            "tooltip": ""
        }]
    }],
    "courseRegistration": {
        "id": "f49d8887-ff19-41d2-a44f-df1fbcae0869",
        "registrationDate": "2017-10-17T07:45:50Z",
        "forCredit": true,
        "contractStatus": 3
    },
    "courseState": 4,
    "id": "a580f4aa-dd53-4215-b014-c9564f9e4c09",
    "title": "TESZT - KRÉTA",
    "description": "Ez a képzés azoknak az oktatási intézményekben dolgozó vezetőknek, illetve a vezetők munkáját segítő kollégáknak szól, akik az iskolaszervezet működtetéséért felelősek, és feladatuk a koncepcionálás, szervezés, dokumentálás, emellett szól mindenkinek, aki érdeklődik a Neptun KRÉTA rendszer iránt.\n\nA képzés célja, hogy olyan eszköztudással vértezze fel a résztvevőket, amelyek segítenek abban, hogy – a rendszer használatával – csökkentsék adminisztrációs terheiket, pontos és naprakész dokumentációt vezessenek anélkül, hogy ez az érdemi szakmai munka rovására menne, követhetővé váljon a tanulók haladása, mindez, a szülők számára is áttekinthetően.\n\nA képzés célja ezen belül, hogy a résztvevők ismerjék meg a felület kezelését, a program struktúráját, az egyes menüpontok tartalmát, és érjék el a felhasználói szintű tudást, amihez a rendszer kellő mennyiségű gyakorlást, próbálkozást biztosít.\nA képzés sikeres teljesítésével pedagógus-továbbképzési tanúsítvány szerezhető, melyet az intézményvezetőjének bemutatva kötelező pedagógus-továbbképzési kreditekre válthat be.\n\nAmennyiben kurzushoz szerződést köt, a szerződést az alábbi címre postázza:\n<b>ELMS Informatikai Zrt.</b>\n1519 Budapest, PF. 506.\n",
    "imageUrl": "https://nexiuscontent.blob.core.windows.net/public/Kreta_logo_100x100.png",
    "label": "27282-18/2016",
    "registration": {
        "id": "a580f4aa-dd53-4215-b014-c9564f9e4c09",
        "startDate": "1753-01-01T12:00:00Z",
        "endDate": "9999-12-31T23:59:59Z",
        "code": "",
        "public": true,
        "invitation": true,
        "enroll": true
    },
    "courseObjects": [{
        "id": "bc2e802e-fb63-4f61-bf20-5bbc6b529ef1",
        "index": 1,
        "title": "Neptun KRÉTA e-Napló",
        "description": "",
        "parent": {"id": "fbf47133-b0a3-457b-94a9-2f924896e523"},
        "createdAt": "2017-03-02T10:22:07Z",
        "requirement": {
            "id": "bc2e802e-fb63-4f61-bf20-5bbc6b529ef1",
            "resultStartDate": "1753-01-01T12:00:00Z",
            "resultEndDate": "9999-12-31T23:59:59Z",
            "requiredForCompleted": true,
            "requiredForSatisfied": true,
            "rollupMethod": 2,
            "progressWeight": 1.0,
            "measureWeight": 1.0,
            "netTimeLimit": 5400,
            "grossTimeLimit": 172800,
            "grossLimitBase": 1,
            "netLimitOverride": true,
            "grossLimitOverride": true,
            "alwaysAvailable": true
        },
        "prerequisite": [],
        "serviceTechnicalProfile": 2,
        "label": ""
    }, {
        "id": "fbf47133-b0a3-457b-94a9-2f924896e523",
        "title": "Root course object",
        "description": "",
        "createdAt": "2017-03-02T10:19:15Z",
        "requirement": {
            "id": "fbf47133-b0a3-457b-94a9-2f924896e523",
            "resultStartDate": "1753-01-01T12:00:00Z",
            "resultEndDate": "9999-12-31T23:59:59Z",
            "requiredForCompleted": true,
            "requiredForSatisfied": true,
            "rollupMethod": 2,
            "progressWeight": 1.0,
            "measureWeight": 1.0,
            "netTimeLimit": 5400,
            "grossTimeLimit": 172800,
            "grossLimitBase": 1,
            "netLimitOverride": true,
            "grossLimitOverride": true
        },
        "prerequisite": [],
        "label": ""
    }],
    "createdAt": "2017-03-02T10:19:15Z",
    "provider": {"name": "All Admin Tester Organization", "id": "51452eaf-3044-4431-bbd1-2b5d17cbe431"},
    "forCredit": true,
    "accreditationNum": "27282-18/2016",
    "isLocked": true
};
