document.addEventListener('DOMContentLoaded', ()=>{
    const elements = document.getElementsByClassName('exp_card');
    const screenWidth = screen.width;

    if(screenWidth >= 768)
    {
        for(const element of elements){
            element.style.display = "none";
            // console.log('running');
        }

        const trizent = document.getElementById('exp_trizent');
        trizent.style.display = "block";
        trizent.classList.add('active');
    }//responsive limit
});

function toggleExperience(expID)
{
    const elements = document.getElementsByClassName('exp_card');

    for(const element of elements){
        element.style.display = "none";
        // console.log('running');
    }

    const trizent = document.getElementById(expID);
    trizent.style.display = "block";
    trizent.classList.add('active');
}//toggle experience