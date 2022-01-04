"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.GluePartitionIndex = exports.GluePartitionIndexPartitionIndexOutputReference = exports.gluePartitionIndexPartitionIndexToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function gluePartitionIndexPartitionIndexToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        index_name: cdktf.stringToTerraform(struct.indexName),
        keys: cdktf.listMapper(cdktf.stringToTerraform)(struct.keys),
    };
}
exports.gluePartitionIndexPartitionIndexToTerraform = gluePartitionIndexPartitionIndexToTerraform;
/**
 * @stability stable
 */
class GluePartitionIndexPartitionIndexOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
    }
    /**
     * @stability stable
     */
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._indexName) {
            hasAnyValues = true;
            internalValueResult.indexName = this._indexName;
        }
        if (this._keys) {
            hasAnyValues = true;
            internalValueResult.keys = this._keys;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._indexName = undefined;
            this._keys = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._indexName = value.indexName;
            this._keys = value.keys;
        }
    }
    /**
     * @stability stable
     */
    get indexName() {
        return this.getStringAttribute('index_name');
    }
    /**
     * @stability stable
     */
    set indexName(value) {
        this._indexName = value;
    }
    /**
     * @stability stable
     */
    resetIndexName() {
        this._indexName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get indexNameInput() {
        return this._indexName;
    }
    /**
     * @stability stable
     */
    get keys() {
        return this.getListAttribute('keys');
    }
    /**
     * @stability stable
     */
    set keys(value) {
        this._keys = value;
    }
    /**
     * @stability stable
     */
    resetKeys() {
        this._keys = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get keysInput() {
        return this._keys;
    }
}
exports.GluePartitionIndexPartitionIndexOutputReference = GluePartitionIndexPartitionIndexOutputReference;
_a = JSII_RTTI_SYMBOL_1;
GluePartitionIndexPartitionIndexOutputReference[_a] = { fqn: "@cdktf/provider-aws.glue.GluePartitionIndexPartitionIndexOutputReference", version: "3.0.1" };
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/glue_partition_index.html aws_glue_partition_index}.
 *
 * @stability stable
 */
class GluePartitionIndex extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/glue_partition_index.html aws_glue_partition_index} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_glue_partition_index',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        // partition_index - computed: false, optional: false, required: true
        this._partitionIndex = new GluePartitionIndexPartitionIndexOutputReference(this, "partition_index", true);
        this._catalogId = config.catalogId;
        this._databaseName = config.databaseName;
        this._tableName = config.tableName;
        this._partitionIndex.internalValue = config.partitionIndex;
    }
    /**
     * @stability stable
     */
    get catalogId() {
        return this.getStringAttribute('catalog_id');
    }
    /**
     * @stability stable
     */
    set catalogId(value) {
        this._catalogId = value;
    }
    /**
     * @stability stable
     */
    resetCatalogId() {
        this._catalogId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get catalogIdInput() {
        return this._catalogId;
    }
    /**
     * @stability stable
     */
    get databaseName() {
        return this.getStringAttribute('database_name');
    }
    /**
     * @stability stable
     */
    set databaseName(value) {
        this._databaseName = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get databaseNameInput() {
        return this._databaseName;
    }
    // id - computed: true, optional: true, required: false
    /**
     * @stability stable
     */
    get id() {
        return this.getStringAttribute('id');
    }
    /**
     * @stability stable
     */
    get tableName() {
        return this.getStringAttribute('table_name');
    }
    /**
     * @stability stable
     */
    set tableName(value) {
        this._tableName = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get tableNameInput() {
        return this._tableName;
    }
    /**
     * @stability stable
     */
    get partitionIndex() {
        return this._partitionIndex;
    }
    /**
     * @stability stable
     */
    putPartitionIndex(value) {
        this._partitionIndex.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get partitionIndexInput() {
        return this._partitionIndex.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    /**
     * @stability stable
     */
    synthesizeAttributes() {
        return {
            catalog_id: cdktf.stringToTerraform(this._catalogId),
            database_name: cdktf.stringToTerraform(this._databaseName),
            table_name: cdktf.stringToTerraform(this._tableName),
            partition_index: gluePartitionIndexPartitionIndexToTerraform(this._partitionIndex.internalValue),
        };
    }
}
exports.GluePartitionIndex = GluePartitionIndex;
_b = JSII_RTTI_SYMBOL_1;
GluePartitionIndex[_b] = { fqn: "@cdktf/provider-aws.glue.GluePartitionIndex", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
GluePartitionIndex.tfResourceType = "aws_glue_partition_index";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2x1ZS1wYXJ0aXRpb24taW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZ2x1ZS9nbHVlLXBhcnRpdGlvbi1pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLCtCQUErQjtBQW9CL0IsU0FBZ0IsMkNBQTJDLENBQUMsTUFBMkY7SUFDckosSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztLQUN2STtJQUNELE9BQU87UUFDTCxVQUFVLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxTQUFTLENBQUM7UUFDdEQsSUFBSSxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUMsTUFBTyxDQUFDLElBQUksQ0FBQztLQUM5RCxDQUFBO0FBQ0gsQ0FBQztBQVRELGtHQVNDOzs7O0FBRUQsTUFBYSwrQ0FBZ0QsU0FBUSxLQUFLLENBQUMsYUFBYTs7Ozs7OztJQUl0RixZQUFtQixpQkFBMkMsRUFBRSxrQkFBMEIsRUFBRSxZQUFxQjtRQUMvRyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsa0JBQWtCLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFKckQsa0JBQWEsR0FBRyxLQUFLLENBQUM7SUFLOUIsQ0FBQzs7OztJQUVELElBQVcsYUFBYTtRQUN0QixJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQ3RDLE1BQU0sbUJBQW1CLEdBQVEsRUFBRSxDQUFDO1FBQ3BDLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNuQixZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1NBQ2pEO1FBQ0QsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2QsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztTQUN2QztRQUNELE9BQU8sWUFBWSxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ3hELENBQUM7Ozs7SUFFRCxJQUFXLGFBQWEsQ0FBQyxLQUFtRDtRQUMxRSxJQUFJLEtBQUssS0FBSyxTQUFTLEVBQUU7WUFDdkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7WUFDM0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7WUFDNUIsSUFBSSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUM7U0FDeEI7YUFDSTtZQUNILElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO1lBQ3JELElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQztZQUNsQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUM7U0FDekI7SUFDSCxDQUFDOzs7O0lBSUQsSUFBVyxTQUFTO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQy9DLENBQUM7Ozs7SUFDRCxJQUFXLFNBQVMsQ0FBQyxLQUFhO1FBQ2hDLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO0lBQzFCLENBQUM7Ozs7SUFDTSxjQUFjO1FBQ25CLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO0lBQzlCLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxjQUFjO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN6QixDQUFDOzs7O0lBSUQsSUFBVyxJQUFJO1FBQ2IsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdkMsQ0FBQzs7OztJQUNELElBQVcsSUFBSSxDQUFDLEtBQWU7UUFDN0IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDckIsQ0FBQzs7OztJQUNNLFNBQVM7UUFDZCxJQUFJLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztJQUN6QixDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsU0FBUztRQUNsQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQzs7QUFqRUgsMEdBa0VDOzs7Ozs7OztBQUdELE1BQWEsa0JBQW1CLFNBQVEsS0FBSyxDQUFDLGlCQUFpQjtJQU83RCxjQUFjO0lBQ2QsY0FBYztJQUNkLGNBQWM7Ozs7Ozs7O0lBR2QsWUFBbUIsS0FBZ0IsRUFBRSxFQUFVLEVBQUUsTUFBZ0M7UUFDL0UsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUU7WUFDZixxQkFBcUIsRUFBRSwwQkFBMEI7WUFDakQsMEJBQTBCLEVBQUU7Z0JBQzFCLFlBQVksRUFBRSxLQUFLO2FBQ3BCO1lBQ0QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxRQUFRO1lBQ3pCLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUztZQUMzQixLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUs7WUFDbkIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTO1NBQzVCLENBQUMsQ0FBQztRQTBETCxxRUFBcUU7UUFDN0Qsb0JBQWUsR0FBRyxJQUFJLCtDQUErQyxDQUFDLElBQVcsRUFBRSxpQkFBaUIsRUFBRSxJQUFJLENBQUMsQ0FBQztRQTFEbEgsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDO1FBQ25DLElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQztRQUN6QyxJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUM7UUFDbkMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLGNBQWMsQ0FBQztJQUM3RCxDQUFDOzs7O0lBUUQsSUFBVyxTQUFTO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQy9DLENBQUM7Ozs7SUFDRCxJQUFXLFNBQVMsQ0FBQyxLQUFhO1FBQ2hDLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO0lBQzFCLENBQUM7Ozs7SUFDTSxjQUFjO1FBQ25CLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO0lBQzlCLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxjQUFjO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN6QixDQUFDOzs7O0lBSUQsSUFBVyxZQUFZO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ2xELENBQUM7Ozs7SUFDRCxJQUFXLFlBQVksQ0FBQyxLQUFhO1FBQ25DLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0lBQzdCLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxpQkFBaUI7UUFDMUIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzVCLENBQUM7SUFFRCx1REFBdUQ7Ozs7SUFDdkQsSUFBVyxFQUFFO1FBQ1gsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdkMsQ0FBQzs7OztJQUlELElBQVcsU0FBUztRQUNsQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUMvQyxDQUFDOzs7O0lBQ0QsSUFBVyxTQUFTLENBQUMsS0FBYTtRQUNoQyxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztJQUMxQixDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsY0FBYztRQUN2QixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDekIsQ0FBQzs7OztJQUlELElBQVcsY0FBYztRQUN2QixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUM7SUFDOUIsQ0FBQzs7OztJQUNNLGlCQUFpQixDQUFDLEtBQXVDO1FBQzlELElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUM3QyxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsbUJBQW1CO1FBQzVCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUM7SUFDNUMsQ0FBQztJQUVELFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTs7OztJQUVGLG9CQUFvQjtRQUM1QixPQUFPO1lBQ0wsVUFBVSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1lBQ3BELGFBQWEsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztZQUMxRCxVQUFVLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7WUFDcEQsZUFBZSxFQUFFLDJDQUEyQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDO1NBQ2pHLENBQUM7SUFDSixDQUFDOztBQXhHSCxnREF5R0M7OztBQXZHQyxvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ3BCLG9CQUFvQjs7OztBQUNHLGlDQUFjLEdBQVcsMEJBQTBCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBnZW5lcmF0ZWQgZnJvbSB0ZXJyYWZvcm0gcmVzb3VyY2Ugc2NoZW1hXG5cbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ2NvbnN0cnVjdHMnO1xuaW1wb3J0ICogYXMgY2RrdGYgZnJvbSAnY2RrdGYnO1xuXG4gICAgICAgICAgICAgICAgIFxuZXhwb3J0IGludGVyZmFjZSBHbHVlUGFydGl0aW9uSW5kZXhDb25maWcgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1NZXRhQXJndW1lbnRzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY2F0YWxvZ0lkPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBkYXRhYmFzZU5hbWU6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdGFibGVOYW1lOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcGFydGl0aW9uSW5kZXg6IEdsdWVQYXJ0aXRpb25JbmRleFBhcnRpdGlvbkluZGV4O1xufVxuZXhwb3J0IGludGVyZmFjZSBHbHVlUGFydGl0aW9uSW5kZXhQYXJ0aXRpb25JbmRleCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGluZGV4TmFtZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkga2V5cz86IHN0cmluZ1tdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2x1ZVBhcnRpdGlvbkluZGV4UGFydGl0aW9uSW5kZXhUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBHbHVlUGFydGl0aW9uSW5kZXhQYXJ0aXRpb25JbmRleE91dHB1dFJlZmVyZW5jZSB8IEdsdWVQYXJ0aXRpb25JbmRleFBhcnRpdGlvbkluZGV4KTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgaW5kZXhfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5pbmRleE5hbWUpLFxuICAgIGtleXM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEua2V5cyksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEdsdWVQYXJ0aXRpb25JbmRleFBhcnRpdGlvbkluZGV4T3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEdsdWVQYXJ0aXRpb25JbmRleFBhcnRpdGlvbkluZGV4IHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9pbmRleE5hbWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmluZGV4TmFtZSA9IHRoaXMuX2luZGV4TmFtZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2tleXMpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmtleXMgPSB0aGlzLl9rZXlzO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogR2x1ZVBhcnRpdGlvbkluZGV4UGFydGl0aW9uSW5kZXggfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9pbmRleE5hbWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9rZXlzID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9pbmRleE5hbWUgPSB2YWx1ZS5pbmRleE5hbWU7XG4gICAgICB0aGlzLl9rZXlzID0gdmFsdWUua2V5cztcbiAgICB9XG4gIH1cblxuICAvLyBpbmRleF9uYW1lIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2luZGV4TmFtZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgaW5kZXhOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaW5kZXhfbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgaW5kZXhOYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9pbmRleE5hbWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRJbmRleE5hbWUoKSB7XG4gICAgdGhpcy5faW5kZXhOYW1lID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpbmRleE5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faW5kZXhOYW1lO1xuICB9XG5cbiAgLy8ga2V5cyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9rZXlzPzogc3RyaW5nW107IFxuICBwdWJsaWMgZ2V0IGtleXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgna2V5cycpO1xuICB9XG4gIHB1YmxpYyBzZXQga2V5cyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLl9rZXlzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0S2V5cygpIHtcbiAgICB0aGlzLl9rZXlzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBrZXlzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2tleXM7XG4gIH1cbn1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5leHBvcnQgY2xhc3MgR2x1ZVBhcnRpdGlvbkluZGV4IGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtUmVzb3VyY2Uge1xuXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIC8vIFNUQVRJQyBQUk9QRVJUSUVTXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgdGZSZXNvdXJjZVR5cGU6IHN0cmluZyA9IFwiYXdzX2dsdWVfcGFydGl0aW9uX2luZGV4XCI7XG5cbiAgLy8gPT09PT09PT09PT1cbiAgLy8gSU5JVElBTElaRVJcbiAgLy8gPT09PT09PT09PT1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBjb25maWc6IEdsdWVQYXJ0aXRpb25JbmRleENvbmZpZykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwge1xuICAgICAgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiAnYXdzX2dsdWVfcGFydGl0aW9uX2luZGV4JyxcbiAgICAgIHRlcnJhZm9ybUdlbmVyYXRvck1ldGFkYXRhOiB7XG4gICAgICAgIHByb3ZpZGVyTmFtZTogJ2F3cydcbiAgICAgIH0sXG4gICAgICBwcm92aWRlcjogY29uZmlnLnByb3ZpZGVyLFxuICAgICAgZGVwZW5kc09uOiBjb25maWcuZGVwZW5kc09uLFxuICAgICAgY291bnQ6IGNvbmZpZy5jb3VudCxcbiAgICAgIGxpZmVjeWNsZTogY29uZmlnLmxpZmVjeWNsZVxuICAgIH0pO1xuICAgIHRoaXMuX2NhdGFsb2dJZCA9IGNvbmZpZy5jYXRhbG9nSWQ7XG4gICAgdGhpcy5fZGF0YWJhc2VOYW1lID0gY29uZmlnLmRhdGFiYXNlTmFtZTtcbiAgICB0aGlzLl90YWJsZU5hbWUgPSBjb25maWcudGFibGVOYW1lO1xuICAgIHRoaXMuX3BhcnRpdGlvbkluZGV4LmludGVybmFsVmFsdWUgPSBjb25maWcucGFydGl0aW9uSW5kZXg7XG4gIH1cblxuICAvLyA9PT09PT09PT09XG4gIC8vIEFUVFJJQlVURVNcbiAgLy8gPT09PT09PT09PVxuXG4gIC8vIGNhdGFsb2dfaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jYXRhbG9nSWQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGNhdGFsb2dJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2NhdGFsb2dfaWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGNhdGFsb2dJZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fY2F0YWxvZ0lkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q2F0YWxvZ0lkKCkge1xuICAgIHRoaXMuX2NhdGFsb2dJZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY2F0YWxvZ0lkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NhdGFsb2dJZDtcbiAgfVxuXG4gIC8vIGRhdGFiYXNlX25hbWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfZGF0YWJhc2VOYW1lPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBkYXRhYmFzZU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkYXRhYmFzZV9uYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBkYXRhYmFzZU5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2RhdGFiYXNlTmFtZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkYXRhYmFzZU5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YWJhc2VOYW1lO1xuICB9XG5cbiAgLy8gaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWQnKTtcbiAgfVxuXG4gIC8vIHRhYmxlX25hbWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfdGFibGVOYW1lPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCB0YWJsZU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd0YWJsZV9uYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCB0YWJsZU5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3RhYmxlTmFtZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YWJsZU5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFibGVOYW1lO1xuICB9XG5cbiAgLy8gcGFydGl0aW9uX2luZGV4IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3BhcnRpdGlvbkluZGV4ID0gbmV3IEdsdWVQYXJ0aXRpb25JbmRleFBhcnRpdGlvbkluZGV4T3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcInBhcnRpdGlvbl9pbmRleFwiLCB0cnVlKTtcbiAgcHVibGljIGdldCBwYXJ0aXRpb25JbmRleCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcGFydGl0aW9uSW5kZXg7XG4gIH1cbiAgcHVibGljIHB1dFBhcnRpdGlvbkluZGV4KHZhbHVlOiBHbHVlUGFydGl0aW9uSW5kZXhQYXJ0aXRpb25JbmRleCkge1xuICAgIHRoaXMuX3BhcnRpdGlvbkluZGV4LmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcGFydGl0aW9uSW5kZXhJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcGFydGl0aW9uSW5kZXguaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vID09PT09PT09PVxuICAvLyBTWU5USEVTSVNcbiAgLy8gPT09PT09PT09XG5cbiAgcHJvdGVjdGVkIHN5bnRoZXNpemVBdHRyaWJ1dGVzKCk6IHsgW25hbWU6IHN0cmluZ106IGFueSB9IHtcbiAgICByZXR1cm4ge1xuICAgICAgY2F0YWxvZ19pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fY2F0YWxvZ0lkKSxcbiAgICAgIGRhdGFiYXNlX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2RhdGFiYXNlTmFtZSksXG4gICAgICB0YWJsZV9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl90YWJsZU5hbWUpLFxuICAgICAgcGFydGl0aW9uX2luZGV4OiBnbHVlUGFydGl0aW9uSW5kZXhQYXJ0aXRpb25JbmRleFRvVGVycmFmb3JtKHRoaXMuX3BhcnRpdGlvbkluZGV4LmludGVybmFsVmFsdWUpLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==