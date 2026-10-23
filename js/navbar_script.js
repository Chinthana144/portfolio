function toggleMobileNavbar()
{
    const navItems = document.getElementById('nav_mobile_items');
    var sidebar = document.getElementById('sidebar');
    
    if(sidebar.style.display === "none" || sidebar.style.display == "")
    {
        sidebar.style.display = "block";
        // navItems.style.display = "block";
        // navItems.classList.add('showMobileNavbar');
    }
    else{
        sidebar.style.display = "none";
        // navItems.classList.remove('showMobileNavbar');
        // navItems.style.display = "none";
    }
}//toggle mobile navbar