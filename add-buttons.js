/*global chrome*/
var imgSrc = "data:image/png;base64,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TUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS40LjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgICAgICAgICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICAgICAgICAgICB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyIKICAgICAgICAgICAgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIj4KICAgICAgICAgPHRpZmY6UmVzb2x1dGlvblVuaXQ+MTwvdGlmZjpSZXNvbHV0aW9uVW5pdD4KICAgICAgICAgPHRpZmY6Q29tcHJlc3Npb24+NTwvdGlmZjpDb21wcmVzc2lvbj4KICAgICAgICAgPHRpZmY6WFJlc29sdXRpb24+MzAwPC90aWZmOlhSZXNvbHV0aW9uPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICAgICA8dGlmZjpZUmVzb2x1dGlvbj4zMDA8L3RpZmY6WVJlc29sdXRpb24+CiAgICAgICAgIDxkYzp0aXRsZT4KICAgICAgICAgICAgPHJkZjpBbHQ+CiAgICAgICAgICAgICAgIDxyZGY6bGkgeG1sOmxhbmc9IngtZGVmYXVsdCI+WmVkPC9yZGY6bGk+CiAgICAgICAgICAgIDwvcmRmOkFsdD4KICAgICAgICAgPC9kYzp0aXRsZT4KICAgICAgICAgPGV4aWY6UGl4ZWxYRGltZW5zaW9uPjg4NjwvZXhpZjpQaXhlbFhEaW1lbnNpb24+CiAgICAgICAgIDxleGlmOkNvbG9yU3BhY2U+MTwvZXhpZjpDb2xvclNwYWNlPgogICAgICAgICA8ZXhpZjpQaXhlbFlEaW1lbnNpb24+ODg2PC9leGlmOlBpeGVsWURpbWVuc2lvbj4KICAgICAgICAgPHhtcDpDcmVhdGVEYXRlPjIwMTMtMTEtMTNUMDg6MjE6NDM8L3htcDpDcmVhdGVEYXRlPgogICAgICAgICA8eG1wOk1vZGlmeURhdGU+MjAxMy0xMS0xM1QwOToxMTowNDwveG1wOk1vZGlmeURhdGU+CiAgICAgICAgIDx4bXA6Q3JlYXRvclRvb2w+UGl4ZWxtYXRvciAzLjA8L3htcDpDcmVhdG9yVG9vbD4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CgYDpzkAAASFSURBVDgRTVRdaFxFFP7mzt17d7NJGknTbNPGJBWKJTaFxuanVRRREW2pNRgCKhStFKwo9qEvBdv4IOibIPggtK8S0bVFgtWHCLEPhsYqITa01KYmm91uNmZ3k+7u/R2/uTHFC+fO3JlzvvOd78wdgc1HKcGpgBChXjJvqKc4eV4o1cON7XARqjwW1Hrwh7TVFe8l69codExJvIqQcSr6jl7nlbH5Ebup+uWs+oGm5ALtLu027Q7tJu1nWtrz5WX/G3yvHnsQv0EIJvTkP1byhno79NTnaBQWSnRdVf5GIvowv9DeCa6UpImkeEWuB8/ikn8iOCq+BkhKKZaoKQ+LQP7pn4AlvxQBA5zQoUOMmYzNOpQgJi2qLBeGKCoPSdOGS2EMNRQcNr/VWFo3NF4vHaiYyUllUx2XLgYsptKKbph20gzJl+kh1wmyGHJJOCIhbdSClUDKQRwRt0ztW36o8RwSsLEKhyTsuOPCdqqwqvdh3S8jvlaEWfoH5sJfqPQcwJ19/TCtAEZV2WGVFBrNZlkJz7K446Lju+sHFeRkbK1kmCu50FxdNmQhC5nPQOTuwircglz8G6gAISNq+/ch99FXyDY+ChQi2gFkTCLw1iFUv3j8iafPyXtz58NbOd2AiLHWTbXwo2UX7pUqmM/kdCHoPvQMtvlFBE3NWHvhLEod/fDjca1GIOsgEy7eNbFW6EFDCmFfJ8UhnsFmMTgmJTLZHAYOHcBnr78Gt+bg008+xsT0dY0NXPkJ2P8G8ORRoO0RhdQu0r/fY8Kq267MGOB7gFdjXSFMacD1fGpUxgfvv4e+vj74vo/WVCuuXr2KRDIJ1+FBcNch8Rs7fxPJ4GHdgG08WaFSnsNBn5eo6TwsEjWngtbtbUilUgiCgEdMoaurC9VKlYVIuK6ru8z8ilwcJBOWHpUphMjW1dVFQZqFDtZjQ0M9pqamMD4+jqGhIXiehwsXLmB0dBR79+7FzMxMVPnAwAAGBge51sN/Uy2L7u7uD2dnZ0cJ6nd2dppJlmPbNkzTZPYQCwsLGGRAtVpFOp1Gb28vpqencezYMQwPD2PPnj1oamoKmpubJZO+I06ePDkYj8cnFxcX5dzcXEjwB/+1phCLxSJ27e3t2L17d6ThmTNnMDIygpaWFl1RwColq1ojkb5ItHw+f5mgR+bn551SqWQXCgVwDdlsFktLS8hkMuAemAynTp3C6dOnoSup1dhEtmbr1q1WsVi8uHPnzjcjQAq+n5u/EDThOPxNAEvr6Hpu1AQ6Y2VlBcvLy+jo6AADIzDDMBwC24zNU6KDra2tt8XY2JikFgHZHCfgRTqBoDwTiDGRoburjWVFphPR9J3p19fXW1pb7r28Y8eOSxMTEybvz+hi1YuKOh5nI76gyHHNivPo+tJgm4+eSynNLVu2gD6rJPBWW1tbWienzwbY/0FZVi+7NUqwFxmkE0bHSAPqzuuHOnsEShP8PMFuPAAjqchDs9Ogunx2bpoxh9mIQ+Vy+TnOe7iX4qjILMP57xx/JNA1rmk5eKEh1Bj6+1/Hdl6rDQRngQAAAABJRU5ErkJggg==";
var btnEl = null;

function showEditButton(el) {
    if(btnEl) {
        document.body.removeChild(btnEl);
    }
    var rect = el.getBoundingClientRect();

    if(rect.left === 0 && rect.top === 0) {
        return;
    }
    var button = document.createElement("img");
    button.setAttribute("src", imgSrc);
    button.setAttribute("title", "Edit in Zed");
    button.setAttribute("style", "position: absolute; left: " + Math.round(rect.right - 40) + "px; top: " + (rect.top + window.scrollY + 5) + "px; cursor: pointer; opacity: 0.8;");
    button.onclick = function() {
        console.log("Contacting Chrome app to edit", el.value || el.innerText);
        var setValue = el.value !== undefined;

        var port = chrome.runtime.connect({
            name: "edit-textarea"
        });
        port.postMessage({
            text: setValue ? el.value : el.innerText
        });
        port.onMessage.addListener(function(msg) {
            if(setValue) {
                el.value = msg.text;
            } else {
                el.innerText = msg.text;
            }
        });
        port.onDisconnect.addListener(function() {
            // console.log("Done editing");
        });
    };
    document.body.appendChild(button);
    btnEl = button;
}

//addButtons();
window.addEventListener("mouseover", function(e) {
    if(e.toElement.tagName === "TEXTAREA") {
        showEditButton(e.toElement);
    } else if(e.toElement.getAttribute("contenteditable")) {
        showEditButton(e.toElement);
    } else if(e.toElement !== btnEl) {
        if(btnEl) {
            document.body.removeChild(btnEl);
            btnEl = null;
        }
    }
});
