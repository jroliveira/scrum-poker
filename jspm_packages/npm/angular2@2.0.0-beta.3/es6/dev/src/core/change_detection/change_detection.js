/* */ 
"format cjs";
import { IterableDiffers } from './differs/iterable_differs';
import { DefaultIterableDifferFactory } from './differs/default_iterable_differ';
import { KeyValueDiffers } from './differs/keyvalue_differs';
import { DefaultKeyValueDifferFactory } from './differs/default_keyvalue_differ';
import { CONST_EXPR } from 'angular2/src/facade/lang';
export { ASTWithSource, AST, AstTransformer, PropertyRead, LiteralArray, ImplicitReceiver } from './parser/ast';
export { Lexer } from './parser/lexer';
export { Parser } from './parser/parser';
export { Locals } from './parser/locals';
export { DehydratedException, ExpressionChangedAfterItHasBeenCheckedException, ChangeDetectionError } from './exceptions';
export { ChangeDetectorDefinition, DebugContext, ChangeDetectorGenConfig } from './interfaces';
export { ChangeDetectionStrategy, CHANGE_DETECTION_STRATEGY_VALUES } from './constants';
export { DynamicProtoChangeDetector } from './proto_change_detector';
export { JitProtoChangeDetector } from './jit_proto_change_detector';
export { BindingRecord, BindingTarget } from './binding_record';
export { DirectiveIndex, DirectiveRecord } from './directive_record';
export { DynamicChangeDetector } from './dynamic_change_detector';
export { ChangeDetectorRef } from './change_detector_ref';
export { IterableDiffers } from './differs/iterable_differs';
export { KeyValueDiffers } from './differs/keyvalue_differs';
export { WrappedValue, SimpleChange } from './change_detection_util';
/**
 * Structural diffing for `Object`s and `Map`s.
 */
export const keyValDiff = CONST_EXPR([CONST_EXPR(new DefaultKeyValueDifferFactory())]);
/**
 * Structural diffing for `Iterable` types such as `Array`s.
 */
export const iterableDiff = CONST_EXPR([CONST_EXPR(new DefaultIterableDifferFactory())]);
export const defaultIterableDiffers = CONST_EXPR(new IterableDiffers(iterableDiff));
export const defaultKeyValueDiffers = CONST_EXPR(new KeyValueDiffers(keyValDiff));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbmdlX2RldGVjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFuZ3VsYXIyL3NyYy9jb3JlL2NoYW5nZV9kZXRlY3Rpb24vY2hhbmdlX2RldGVjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiT0FBTyxFQUFDLGVBQWUsRUFBbUMsTUFBTSw0QkFBNEI7T0FDckYsRUFBQyw0QkFBNEIsRUFBQyxNQUFNLG1DQUFtQztPQUN2RSxFQUFDLGVBQWUsRUFBd0IsTUFBTSw0QkFBNEI7T0FDMUUsRUFBQyw0QkFBNEIsRUFBQyxNQUFNLG1DQUFtQztPQUN2RSxFQUFRLFVBQVUsRUFBWSxNQUFNLDBCQUEwQjtBQUVyRSxTQUNFLGFBQWEsRUFDYixHQUFHLEVBQ0gsY0FBYyxFQUNkLFlBQVksRUFDWixZQUFZLEVBQ1osZ0JBQWdCLFFBQ1gsY0FBYyxDQUFDO0FBRXRCLFNBQVEsS0FBSyxRQUFPLGdCQUFnQixDQUFDO0FBQ3JDLFNBQVEsTUFBTSxRQUFPLGlCQUFpQixDQUFDO0FBQ3ZDLFNBQVEsTUFBTSxRQUFPLGlCQUFpQixDQUFDO0FBRXZDLFNBQ0UsbUJBQW1CLEVBQ25CLCtDQUErQyxFQUMvQyxvQkFBb0IsUUFDZixjQUFjLENBQUM7QUFDdEIsU0FJRSx3QkFBd0IsRUFDeEIsWUFBWSxFQUNaLHVCQUF1QixRQUNsQixjQUFjLENBQUM7QUFDdEIsU0FBUSx1QkFBdUIsRUFBRSxnQ0FBZ0MsUUFBTyxhQUFhLENBQUM7QUFDdEYsU0FBUSwwQkFBMEIsUUFBTyx5QkFBeUIsQ0FBQztBQUNuRSxTQUFRLHNCQUFzQixRQUFPLDZCQUE2QixDQUFDO0FBQ25FLFNBQVEsYUFBYSxFQUFFLGFBQWEsUUFBTyxrQkFBa0IsQ0FBQztBQUM5RCxTQUFRLGNBQWMsRUFBRSxlQUFlLFFBQU8sb0JBQW9CLENBQUM7QUFDbkUsU0FBUSxxQkFBcUIsUUFBTywyQkFBMkIsQ0FBQztBQUNoRSxTQUFRLGlCQUFpQixRQUFPLHVCQUF1QixDQUFDO0FBQ3hELFNBQ0UsZUFBZSxRQUlWLDRCQUE0QixDQUFDO0FBQ3BDLFNBQVEsZUFBZSxRQUE4Qyw0QkFBNEIsQ0FBQztBQUVsRyxTQUFRLFlBQVksRUFBRSxZQUFZLFFBQU8seUJBQXlCLENBQUM7QUFFbkU7O0dBRUc7QUFDSCxhQUFhLFVBQVUsR0FDbkIsVUFBVSxDQUFDLENBQUMsVUFBVSxDQUFDLElBQUksNEJBQTRCLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUVqRTs7R0FFRztBQUNILGFBQWEsWUFBWSxHQUNyQixVQUFVLENBQUMsQ0FBQyxVQUFVLENBQUMsSUFBSSw0QkFBNEIsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBRWpFLGFBQWEsc0JBQXNCLEdBQUcsVUFBVSxDQUFDLElBQUksZUFBZSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7QUFFcEYsYUFBYSxzQkFBc0IsR0FBRyxVQUFVLENBQUMsSUFBSSxlQUFlLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SXRlcmFibGVEaWZmZXJzLCBJdGVyYWJsZURpZmZlckZhY3RvcnksIFRyYWNrQnlGbn0gZnJvbSAnLi9kaWZmZXJzL2l0ZXJhYmxlX2RpZmZlcnMnO1xuaW1wb3J0IHtEZWZhdWx0SXRlcmFibGVEaWZmZXJGYWN0b3J5fSBmcm9tICcuL2RpZmZlcnMvZGVmYXVsdF9pdGVyYWJsZV9kaWZmZXInO1xuaW1wb3J0IHtLZXlWYWx1ZURpZmZlcnMsIEtleVZhbHVlRGlmZmVyRmFjdG9yeX0gZnJvbSAnLi9kaWZmZXJzL2tleXZhbHVlX2RpZmZlcnMnO1xuaW1wb3J0IHtEZWZhdWx0S2V5VmFsdWVEaWZmZXJGYWN0b3J5fSBmcm9tICcuL2RpZmZlcnMvZGVmYXVsdF9rZXl2YWx1ZV9kaWZmZXInO1xuaW1wb3J0IHtDT05TVCwgQ09OU1RfRVhQUiwgaXNQcmVzZW50fSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2xhbmcnO1xuXG5leHBvcnQge1xuICBBU1RXaXRoU291cmNlLFxuICBBU1QsXG4gIEFzdFRyYW5zZm9ybWVyLFxuICBQcm9wZXJ0eVJlYWQsXG4gIExpdGVyYWxBcnJheSxcbiAgSW1wbGljaXRSZWNlaXZlclxufSBmcm9tICcuL3BhcnNlci9hc3QnO1xuXG5leHBvcnQge0xleGVyfSBmcm9tICcuL3BhcnNlci9sZXhlcic7XG5leHBvcnQge1BhcnNlcn0gZnJvbSAnLi9wYXJzZXIvcGFyc2VyJztcbmV4cG9ydCB7TG9jYWxzfSBmcm9tICcuL3BhcnNlci9sb2NhbHMnO1xuXG5leHBvcnQge1xuICBEZWh5ZHJhdGVkRXhjZXB0aW9uLFxuICBFeHByZXNzaW9uQ2hhbmdlZEFmdGVySXRIYXNCZWVuQ2hlY2tlZEV4Y2VwdGlvbixcbiAgQ2hhbmdlRGV0ZWN0aW9uRXJyb3Jcbn0gZnJvbSAnLi9leGNlcHRpb25zJztcbmV4cG9ydCB7XG4gIFByb3RvQ2hhbmdlRGV0ZWN0b3IsXG4gIENoYW5nZURldGVjdG9yLFxuICBDaGFuZ2VEaXNwYXRjaGVyLFxuICBDaGFuZ2VEZXRlY3RvckRlZmluaXRpb24sXG4gIERlYnVnQ29udGV4dCxcbiAgQ2hhbmdlRGV0ZWN0b3JHZW5Db25maWdcbn0gZnJvbSAnLi9pbnRlcmZhY2VzJztcbmV4cG9ydCB7Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENIQU5HRV9ERVRFQ1RJT05fU1RSQVRFR1lfVkFMVUVTfSBmcm9tICcuL2NvbnN0YW50cyc7XG5leHBvcnQge0R5bmFtaWNQcm90b0NoYW5nZURldGVjdG9yfSBmcm9tICcuL3Byb3RvX2NoYW5nZV9kZXRlY3Rvcic7XG5leHBvcnQge0ppdFByb3RvQ2hhbmdlRGV0ZWN0b3J9IGZyb20gJy4vaml0X3Byb3RvX2NoYW5nZV9kZXRlY3Rvcic7XG5leHBvcnQge0JpbmRpbmdSZWNvcmQsIEJpbmRpbmdUYXJnZXR9IGZyb20gJy4vYmluZGluZ19yZWNvcmQnO1xuZXhwb3J0IHtEaXJlY3RpdmVJbmRleCwgRGlyZWN0aXZlUmVjb3JkfSBmcm9tICcuL2RpcmVjdGl2ZV9yZWNvcmQnO1xuZXhwb3J0IHtEeW5hbWljQ2hhbmdlRGV0ZWN0b3J9IGZyb20gJy4vZHluYW1pY19jaGFuZ2VfZGV0ZWN0b3InO1xuZXhwb3J0IHtDaGFuZ2VEZXRlY3RvclJlZn0gZnJvbSAnLi9jaGFuZ2VfZGV0ZWN0b3JfcmVmJztcbmV4cG9ydCB7XG4gIEl0ZXJhYmxlRGlmZmVycyxcbiAgSXRlcmFibGVEaWZmZXIsXG4gIEl0ZXJhYmxlRGlmZmVyRmFjdG9yeSxcbiAgVHJhY2tCeUZuXG59IGZyb20gJy4vZGlmZmVycy9pdGVyYWJsZV9kaWZmZXJzJztcbmV4cG9ydCB7S2V5VmFsdWVEaWZmZXJzLCBLZXlWYWx1ZURpZmZlciwgS2V5VmFsdWVEaWZmZXJGYWN0b3J5fSBmcm9tICcuL2RpZmZlcnMva2V5dmFsdWVfZGlmZmVycyc7XG5leHBvcnQge1BpcGVUcmFuc2Zvcm19IGZyb20gJy4vcGlwZV90cmFuc2Zvcm0nO1xuZXhwb3J0IHtXcmFwcGVkVmFsdWUsIFNpbXBsZUNoYW5nZX0gZnJvbSAnLi9jaGFuZ2VfZGV0ZWN0aW9uX3V0aWwnO1xuXG4vKipcbiAqIFN0cnVjdHVyYWwgZGlmZmluZyBmb3IgYE9iamVjdGBzIGFuZCBgTWFwYHMuXG4gKi9cbmV4cG9ydCBjb25zdCBrZXlWYWxEaWZmOiBLZXlWYWx1ZURpZmZlckZhY3RvcnlbXSA9XG4gICAgQ09OU1RfRVhQUihbQ09OU1RfRVhQUihuZXcgRGVmYXVsdEtleVZhbHVlRGlmZmVyRmFjdG9yeSgpKV0pO1xuXG4vKipcbiAqIFN0cnVjdHVyYWwgZGlmZmluZyBmb3IgYEl0ZXJhYmxlYCB0eXBlcyBzdWNoIGFzIGBBcnJheWBzLlxuICovXG5leHBvcnQgY29uc3QgaXRlcmFibGVEaWZmOiBJdGVyYWJsZURpZmZlckZhY3RvcnlbXSA9XG4gICAgQ09OU1RfRVhQUihbQ09OU1RfRVhQUihuZXcgRGVmYXVsdEl0ZXJhYmxlRGlmZmVyRmFjdG9yeSgpKV0pO1xuXG5leHBvcnQgY29uc3QgZGVmYXVsdEl0ZXJhYmxlRGlmZmVycyA9IENPTlNUX0VYUFIobmV3IEl0ZXJhYmxlRGlmZmVycyhpdGVyYWJsZURpZmYpKTtcblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRLZXlWYWx1ZURpZmZlcnMgPSBDT05TVF9FWFBSKG5ldyBLZXlWYWx1ZURpZmZlcnMoa2V5VmFsRGlmZikpO1xuIl19