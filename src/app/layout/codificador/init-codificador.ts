export class InitCodificador {

load(){

    if(localStorage.getItem('videoSource')=== null || localStorage.getItem('audioSource')=== null || localStorage.getItem('audioCodec')=== null 
    || localStorage.getItem('audioBitRate')=== null || localStorage.getItem('videoResolution')=== null || localStorage.getItem('videoResolution')=== null
|| localStorage.getItem('videoProfile')=== null || localStorage.getItem('gopSize')=== null || localStorage.getItem('videoBurstSize')=== null
|| localStorage.getItem('outputInterface')=== null || localStorage.getItem('outputFormat')=== null || localStorage.getItem('videoBitRate')=== null 
|| localStorage.getItem('destIpAddress')=== null || localStorage.getItem('destPort')=== null || localStorage.getItem('tsBitRate')=== null 
|| localStorage.getItem('asiPcrInterval')=== null || localStorage.getItem('pidAudio')=== null || localStorage.getItem('pidVideo')=== null 
|| localStorage.getItem('pidPcr')=== null || localStorage.getItem('localIpAddress')=== null || localStorage.getItem('localNetMask')=== null 
|| localStorage.getItem('defaultGateway')=== null ){
                 var videoSource = ['SDI','SDI','SDI'];
                 var audioSource = ['Analog Jacks','Analog Jacks','Analog Jacks'];
                 var audioCodec = ['AAC-LC ADTS','AAC-LC ADTS','AAC-LC ADTS'];
                 var audioBitRate = ['64 Kbps','64 Kbps','64 Kbps'];
                 var videoResolution = ['Follow Input','Follow Input','Follow Input'];
                 var rateControl = ['CBR','CBR','CBR'];
                 var videoProfile = ['Baseline','Baseline','Baseline'];
                 var gopSize = ['15 Frames','15 Frames','15 Frames'];
                 var videoBurstSize = ['150ms','150ms','150ms'];
                 var videoCodec = ['H.264','H.264','H.264'];
                 var frameDecimation = ['None','None','None'];
                 var outputInterface = ['Ethernet(VBR)','Ethernet(VBR)','Ethernet(VBR)'];
                 var outputFormat = ['RTP','RTP','RTP'];
                 var videoBitRate = ['0','0','0'];
                 var destIpAddress = ['0.0.0.0','0.0.0.0','0.0.0.0'];
                 var destPort = ['0','0','0'];
                 var tsBitRate = ['0','0','0'];
                 var asiPcrInterval = ['0','0','0'];
                 var pidAudio = ['0','0','0'];
                 var pidVideo = ['0','0','0'];
                 var pidPcr = ['0','0','0'];
                 var localIpAddress = ['0.0.0.0','0.0.0.0','0.0.0.0'];
                 var localNetMask = ['0.0.0.0','0.0.0.0','0.0.0.0'];
                 var defaultGateway = ['0.0.0.0','0.0.0.0','0.0.0.0'];
                 var encoder1 = false;
                 var encoder2 = false;
                 var encoder3 = false;

                 localStorage.setItem('videoSource', JSON.stringify(videoSource));
                 localStorage.setItem('audioSource', JSON.stringify(audioSource));
                 localStorage.setItem('audioCodec', JSON.stringify(audioCodec));
                 localStorage.setItem('audioBitRate', JSON.stringify(audioBitRate));
                 localStorage.setItem('videoResolution', JSON.stringify(videoResolution));
                 localStorage.setItem('rateControl', JSON.stringify(rateControl));
                 localStorage.setItem('videoProfile', JSON.stringify(videoProfile));
                 localStorage.setItem('gopSize', JSON.stringify(gopSize));
                 localStorage.setItem('videoBurstSize', JSON.stringify(videoBurstSize));
                 localStorage.setItem('videoCodec', JSON.stringify(videoCodec));
                 localStorage.setItem('frameDecimation', JSON.stringify(frameDecimation));
                 localStorage.setItem('outputInterface', JSON.stringify(outputInterface));
                 localStorage.setItem('outputFormat', JSON.stringify(outputFormat));
                 localStorage.setItem('videoBitRate', JSON.stringify(videoBitRate));
                 localStorage.setItem('destIpAddress', JSON.stringify(destIpAddress));
                 localStorage.setItem('destPort', JSON.stringify(destPort));
                 localStorage.setItem('tsBitRate', JSON.stringify(tsBitRate));
                 localStorage.setItem('asiPcrInterval', JSON.stringify(asiPcrInterval));
                 localStorage.setItem('pidAudio', JSON.stringify(pidAudio));
                 localStorage.setItem('pidVideo', JSON.stringify(pidVideo));
                 localStorage.setItem('pidPcr', JSON.stringify(pidPcr));
                 localStorage.setItem('localIpAddress', JSON.stringify(localIpAddress));
                 localStorage.setItem('localNetMask', JSON.stringify(localNetMask));
                 localStorage.setItem('defaultGateway', JSON.stringify(defaultGateway));
                 localStorage.setItem('encoder1', JSON.stringify(encoder1));
                 localStorage.setItem('encoder2', JSON.stringify(encoder2));
                 localStorage.setItem('encoder3', JSON.stringify(encoder3));
    }
    else{}

}
    
}