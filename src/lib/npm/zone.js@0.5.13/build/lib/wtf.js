// Detect and setup WTF.
var wtfTrace = null;
var wtfEvents = null;
var wtfEnabled = (function () {
    var wtf = global['wtf'];
    if (wtf) {
        wtfTrace = wtf['trace'];
        if (wtfTrace) {
            wtfEvents = wtfTrace['events'];
            return true;
        }
    }
    return false;
})();
function noop() {
}
exports.enabled = wtfEnabled;
exports.createScope = wtfEnabled ? function (signature, flags) {
    return wtfEvents.createScope(signature, flags);
} : function (s, f) {
    return noop;
};
exports.createEvent = wtfEnabled ? function (signature, flags) {
    return wtfEvents.createInstance(signature, flags);
} : function (s, f) {
    return noop;
};
exports.leaveScope = wtfEnabled ? function (scope, returnValue) {
    wtfTrace.leaveScope(scope, returnValue);
    return returnValue;
} : function (s, v) {
    return v;
};
exports.beginTimeRange = wtfEnabled ? function (rangeType, action) {
    return wtfTrace.beginTimeRange(rangeType, action);
} : function (t, a) {
    return null;
};
exports.endTimeRange = wtfEnabled ? function (range) {
    wtfTrace.endTimeRange(range);
} : function (r) {
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid3RmLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vbGliL3d0Zi50cyJdLCJuYW1lcyI6WyJub29wIl0sIm1hcHBpbmdzIjoiQUFBQSx3QkFBd0I7QUFDeEIsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDO0FBQ3BCLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQztBQUNyQixJQUFJLFVBQVUsR0FBRyxDQUFDO0lBQ2hCLElBQUksR0FBRyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN4QixFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ1IsUUFBUSxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN4QixFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ2IsU0FBUyxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUMvQixNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2QsQ0FBQztJQUNILENBQUM7SUFDRCxNQUFNLENBQUMsS0FBSyxDQUFDO0FBQ2YsQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUVMO0FBQ0FBLENBQUNBO0FBVVksZUFBTyxHQUFXLFVBQVUsQ0FBQztBQUM3QixtQkFBVyxHQUFnRCxVQUFVLEdBQUcsVUFBVSxTQUFTLEVBQUUsS0FBSztJQUM3RyxNQUFNLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDakQsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxFQUFFLENBQUM7SUFDaEIsTUFBTSxDQUFDLElBQUksQ0FBQztBQUNkLENBQUMsQ0FBQztBQUNXLG1CQUFXLEdBQXVELFVBQVUsR0FBRyxVQUFVLFNBQVMsRUFBRSxLQUFLO0lBQ3BILE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQztBQUNwRCxDQUFDLEdBQUcsVUFBVSxDQUFDLEVBQUUsQ0FBQztJQUNoQixNQUFNLENBQUMsSUFBSSxDQUFDO0FBQ2QsQ0FBQyxDQUFDO0FBQ1csa0JBQVUsR0FBRyxVQUFVLEdBQUcsVUFBVSxLQUFnQixFQUFFLFdBQWU7SUFDaEYsUUFBUSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDeEMsTUFBTSxDQUFDLFdBQVcsQ0FBQztBQUNyQixDQUFDLEdBQUcsVUFBVSxDQUFDLEVBQUUsQ0FBQztJQUNoQixNQUFNLENBQUMsQ0FBQyxDQUFDO0FBQ1gsQ0FBQyxDQUFDO0FBQ1csc0JBQWMsR0FBRyxVQUFVLEdBQUcsVUFBVSxTQUFTLEVBQUUsTUFBTTtJQUNwRSxNQUFNLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDcEQsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxFQUFFLENBQUM7SUFDaEIsTUFBTSxDQUFDLElBQUksQ0FBQztBQUNkLENBQUMsQ0FBQztBQUNXLG9CQUFZLEdBQUcsVUFBVSxHQUFHLFVBQVUsS0FBSztJQUN0RCxRQUFRLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQy9CLENBQUMsR0FBRyxVQUFVLENBQUM7QUFDZixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBEZXRlY3QgYW5kIHNldHVwIFdURi5cbnZhciB3dGZUcmFjZSA9IG51bGw7XG52YXIgd3RmRXZlbnRzID0gbnVsbDtcbnZhciB3dGZFbmFibGVkID0gKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHd0ZiA9IGdsb2JhbFsnd3RmJ107XG4gIGlmICh3dGYpIHtcbiAgICB3dGZUcmFjZSA9IHd0ZlsndHJhY2UnXTtcbiAgICBpZiAod3RmVHJhY2UpIHtcbiAgICAgIHd0ZkV2ZW50cyA9IHd0ZlRyYWNlWydldmVudHMnXTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59KSgpO1xuXG5mdW5jdGlvbiBub29wKCkge1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFd0ZlNjb3BlRm4ge1xuICAoLi4uYXJncyk6IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBXdGZFdmVudEZuIHtcbiAgKC4uLmFyZ3MpOiBhbnk7XG59XG5cbmV4cG9ydCBjb25zdCBlbmFibGVkOmJvb2xlYW4gPSB3dGZFbmFibGVkO1xuZXhwb3J0IGNvbnN0IGNyZWF0ZVNjb3BlOihzaWduYXR1cmU6c3RyaW5nLCBmbGFncz86YW55KSA9PiBXdGZTY29wZUZuID0gd3RmRW5hYmxlZCA/IGZ1bmN0aW9uIChzaWduYXR1cmUsIGZsYWdzKSB7XG4gIHJldHVybiB3dGZFdmVudHMuY3JlYXRlU2NvcGUoc2lnbmF0dXJlLCBmbGFncyk7XG59IDogZnVuY3Rpb24gKHMsIGYpIHtcbiAgcmV0dXJuIG5vb3A7XG59O1xuZXhwb3J0IGNvbnN0IGNyZWF0ZUV2ZW50OiAoc2lnbmF0dXJlOiBzdHJpbmcsIGFjdGlvbj86IHN0cmluZykgPT4gV3RmRXZlbnRGbiA9IHd0ZkVuYWJsZWQgPyBmdW5jdGlvbiAoc2lnbmF0dXJlLCBmbGFncykge1xuICByZXR1cm4gd3RmRXZlbnRzLmNyZWF0ZUluc3RhbmNlKHNpZ25hdHVyZSwgZmxhZ3MpO1xufSA6IGZ1bmN0aW9uIChzLCBmKSB7XG4gIHJldHVybiBub29wO1xufTtcbmV4cG9ydCBjb25zdCBsZWF2ZVNjb3BlID0gd3RmRW5hYmxlZCA/IGZ1bmN0aW9uIChzY29wZTpXdGZTY29wZUZuLCByZXR1cm5WYWx1ZTphbnkpOmFueSB7XG4gIHd0ZlRyYWNlLmxlYXZlU2NvcGUoc2NvcGUsIHJldHVyblZhbHVlKTtcbiAgcmV0dXJuIHJldHVyblZhbHVlO1xufSA6IGZ1bmN0aW9uIChzLCB2KSB7XG4gIHJldHVybiB2O1xufTtcbmV4cG9ydCBjb25zdCBiZWdpblRpbWVSYW5nZSA9IHd0ZkVuYWJsZWQgPyBmdW5jdGlvbiAocmFuZ2VUeXBlLCBhY3Rpb24pIHtcbiAgcmV0dXJuIHd0ZlRyYWNlLmJlZ2luVGltZVJhbmdlKHJhbmdlVHlwZSwgYWN0aW9uKTtcbn0gOiBmdW5jdGlvbiAodCwgYSkge1xuICByZXR1cm4gbnVsbDtcbn07XG5leHBvcnQgY29uc3QgZW5kVGltZVJhbmdlID0gd3RmRW5hYmxlZCA/IGZ1bmN0aW9uIChyYW5nZSkge1xuICB3dGZUcmFjZS5lbmRUaW1lUmFuZ2UocmFuZ2UpO1xufSA6IGZ1bmN0aW9uIChyKSB7XG59O1xuIl19