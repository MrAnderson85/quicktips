function winLoad() {
    document.getElementById("words").setAttribute("hidden","_self");
    document.getElementById("windows_info").removeAttribute("hidden");
    document.getElementById("macos_info").setAttribute("hidden","_self");
    document.getElementById("linux_info").setAttribute("hidden","_self");
    document.getElementById("chromeos_info").setAttribute("hidden","_self");
};
function macLoad() {
    document.getElementById("words").setAttribute("hidden","_self");
    document.getElementById("windows_info").setAttribute("hidden","_self");
    document.getElementById("macos_info").removeAttribute("hidden");
    document.getElementById("linux_info").setAttribute("hidden","_self");
    document.getElementById("chromeos_info").setAttribute("hidden","_self");
};
function linuxLoad() {
    document.getElementById("words").setAttribute("hidden","_self");
    document.getElementById("windows_info").setAttribute("hidden","_self");
    document.getElementById("macos_info").setAttribute("hidden","_self");
    document.getElementById("linux_info").removeAttribute("hidden");
    document.getElementById("chromeos_info").setAttribute("hidden","_self");
};
function chromeLoad() {
    document.getElementById("words").setAttribute("hidden","_self");
    document.getElementById("windows_info").setAttribute("hidden","_self");
    document.getElementById("macos_info").setAttribute("hidden","_self");
    document.getElementById("linux_info").setAttribute("hidden","_self");
    document.getElementById("chromeos_info").removeAttribute("hidden");
};
function reset() {
    document.getElementById("words").toggleAttribute("hidden");
}