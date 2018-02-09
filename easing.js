 function linear(time)
  { 
    var start = 0.0;
    var end = 1.0;
    var duration = 1.0;
    var inc = end - start;
    return clamp(inc*time/duration + start, 0, 1);
  }

  // Quadratic
  function inQuad(time)
  { 
    var start = 0.0;
    var end = 1.0;
    var duration = 1.0;
    time /= duration;
    var inc = end - start;
    return clamp(inc * time * time + start, 0, 1);
  }

  function outQuad(time)
  { 
    var start = 0.0;
    var end = 1.0;
    var duration = 1.0;
    time /= duration;
    var inc = end - start;
    return clamp(-inc * time * (time - 2) + start, 0, 1);
  }

function inoutQuad(time)
  { 
    var start = 0.0;
    var end = 1.0;
    var duration = 1.0;
    time /= duration/2;
    var inc = end - start;
    if (time < 1)
    {
      return clamp(inc/2 * time * time + start, 0, 1);
    } else
    {
      time--;
      return clamp(-inc/2 * (time * (time - 2) - 1) + start, 0, 1);
    }
  }

  //Cubic
  function inCubic(time)
  { 
    var start = 0.0;
    var end = 1.0;
    var duration = 1.0;
    time /= duration;
    var inc = end - start;
    return clamp(inc * Math.pow(time, 3) + start, 0, 1);
  }

  function outCubic(time)
  { 
    var start = 0.0;
    var end = 1.0;
    var duration = 1.0;
    time /= duration;
    time --;
    var inc = end - start;
    return clamp(inc * (Math.pow(time, 3) + 1) + start, 0, 1);
  }

  function inoutCubic(time)
  { 
    var start = 0.0;
    var end = 1.0;
    var duration = 1.0;
    time /= duration/2;
    var inc = end - start;
    if (time < 1)
    {
      return clamp(inc/2 * Math.pow(time, 3) + start, 0, 1);
    } else
    {
      time -= 2;
      return clamp(inc/2 * (Math.pow(time, 3) + 2) + start, 0, 1);
    }
  }

  //Quatric
  function inQuartic(time)
  { 
    var start = 0.0;
    var end = 1.0;
    var duration = 1.0;
    time /= duration;
    var inc = end - start;
    return clamp(inc * Math.pow(time, 4) + start, 0,1);
  }

  function outQuartic(time)
  { 
    var start = 0.0;
    var end = 1.0;
    var duration = 1.0;
    time /= duration;
    time --;
    var inc = end - start;
    return clamp(-inc * (Math.pow(time, 4) - 1) + start, 0, 1);
  }

  function inoutQuartic(time)
  { 
    var start = 0.0;
    var end = 1.0;
    var duration = 1.0;
    time /= duration/2;
    var inc = end - start;
    if (time < 1)
    {
      return clamp(inc/2 * Math.pow(time, 4) + start, 0, 1);
    } else
    {
      time -= 2;
      return clamp(-inc/2 * (Math.pow(time, 4) - 2) + start, 0, 1);
    }
  }

  //Quintic
  function inQuintic(time)
  { 
    var start = 0.0;
    var end = 1.0;
    var duration = 1.0;
    time /= duration;
    var inc = end - start;
    return clamp(inc * Math.pow(time, 5) + start, 0, 1);
  }

  function outQuintic(time)
  { 
    var start = 0.0;
    var end = 1.0;
    var duration = 1.0;
    time /= duration;
    time --;
    var inc = end - start;
    return clamp(inc * (Math.pow(time, 5) + 1) + start, 0, 1);
  }

  function inoutQuintic(time)
  { 
    var start = 0.0;
    var end = 1.0;
    var duration = 1.0;
    time /= duration/2;
    var inc = end - start;
    if (time < 1)
    {
      return clamp(inc/2 * Math.pow(time, 5) + start, 0, 1);
    } else
    {
      time -= 2;
      return clamp(inc/2 * (Math.pow(time, 5) + 2) + start, 0, 1);
    }
  }

  //Sinusoïdal
  function inSin(time)
  { 
    var start = 0.0;
    var end = 1.0;
    var duration = 1.0;
    var inc = end - start;
    return clamp(-inc * Math.cos(time/duration * Math.PI/2.0) + inc + start, 0, 1);
  }

  function outSin(time)
  { 
    var start = 0.0;
    var end = 1.0;
    var duration = 1.0;
    var inc = end - start;
    return clamp(inc * Math.sin(time/duration * Math.PI / 2) + start, 0, 1);
  }

  function inoutSin(time)
  { 
    var start = 0.0;
    var end = 1.0;
    var duration = 1.0;
    var inc = end - start;
    return clamp(-inc/2 * (Math.cos(Math.PI * time/duration) - 1) + start, 0, 1);
  }

  //Exponential
  function inExp(time)
  { 
    var start = 0.0;
    var end = 1.0;
    var duration = 1.0;
    var inc = end - start;
    //return inc * pow(2, 10 * (time/duration - 1)) + start;
    if (time <= 0)
    {
      return start;
    } else
    {
      return clamp(inc * Math.pow(2, 10 * (time/duration-1)) + start, 0, 1);
    }
  }

  function outExp(time)
  { 
    var start = 0.0;
    var end = 1.0;
    var duration = 1.0;
    var inc = end - start;
    if (time >= 1.0)
    {
      return 1.0;
    } else
    {
      return clamp(inc * (-Math.pow(2, -10 * (time/duration)) + 1) + start, 0, 1);
    }
  }

  function inoutExp(time)
  { 
    var start = 0.0;
    var end = 1.0;
    var duration = 1.0;
    time /= duration/2;
    var inc = end - start;
    if (time < 1)
    {
      return clamp(inc/2 * Math.pow(2, 10 * (time-1)) + start, 0, 1);
    } else
    {
      time --;
      return clamp(inc/2 * (-Math.pow(2, -10 * time) + 2) + start, 0, 1);
    }
  }

  //Circular
  function inCirc(time)
  { 
    var start = 0.0;
    var end = 1.0;
    var duration = 1.0;
    time /= duration;
    var inc = end - start;
    return clamp(-inc * (Math.sqrt(1 - time * time) - 1) + start, 0, 1);
  }

  function outCirc(time)
  { 
    var start = 0.0;
    var end = 1.0;
    var duration = 1.0;
    time /= duration;
    time --;
    var inc = end - start;
    return clamp(inc * Math.sqrt(1 - time * time) + start, 0, 1);
  }

  function inoutCirc(time)
  { 
    var start = 0.0;
    var end = 1.0;
    var duration = 1.0;
    time /= duration/2;
    var inc = end - start;
    if (time < 1)
    {
      return clamp(-inc/2 * (Math.sqrt(1 - time * time) - 1) + start, 0, 1);
    } else
    {
      time -= 2;
      return clamp(inc/2 * (Math.sqrt(1 - time * time) + 1) + start, 0, 1);
    }
  }

function clamp(num, min, max) {
  return num <= min ? min : num >= max ? max : num;
}
